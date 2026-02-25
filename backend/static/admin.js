// API Base URL - use relative path to avoid CORS issues
const API_BASE = '/api';

// Current edit state
let currentEditType = null;
let currentEditId = null;

// ============ TAB SWITCHING ============
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;

        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');
    });
});

// ============ EVENTS MANAGEMENT ============

// Load events on page load
document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    loadFaculty();
});

// Event form submission
document.getElementById('eventForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = e.target.querySelector('.btn-submit');
    const submitText = document.getElementById('eventSubmitText');
    const submitLoader = document.getElementById('eventSubmitLoader');
    const statusMessage = document.getElementById('eventStatusMessage');

    // Disable submit button
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline-block';

    try {
        const formData = new FormData(e.target);

        const response = await fetch(`${API_BASE}/events`, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            statusMessage.textContent = 'Event uploaded successfully!';
            statusMessage.className = 'status-message success';
            e.target.reset();
            document.getElementById('eventImagePreview').classList.remove('active');
            loadEvents();
        } else {
            throw new Error('Failed to upload event');
        }
    } catch (error) {
        statusMessage.textContent = 'Error uploading event. Please try again.';
        statusMessage.className = 'status-message error';
    } finally {
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoader.style.display = 'none';
    }
});

// Event image preview
document.getElementById('event-image').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const preview = document.getElementById('eventImagePreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            preview.classList.add('active');
        };
        reader.readAsDataURL(file);
    } else {
        preview.classList.remove('active');
    }
});

// Load and display events
async function loadEvents() {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '<div class="loading">Loading events...</div>';

    try {
        const response = await fetch(`${API_BASE}/events`);
        const events = await response.json();

        if (events.length === 0) {
            eventsList.innerHTML = '<div class="loading">No events found.</div>';
            return;
        }

        eventsList.innerHTML = events.map(event => `
            <div class="event-card">
                ${event.image_url ? `<img src="${event.image_url}" alt="${event.title}" class="event-image">` : ''}
                <div class="event-content">
                    <span class="event-category">${event.category}</span>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-date">${new Date(event.date).toLocaleDateString()}</p>
                    <p class="event-description">${event.description}</p>
                    <button class="btn-edit" onclick="editEvent('${event.id}')">Edit Event</button>
                    <button class="btn-delete" onclick="deleteEvent('${event.id}')">Delete Event</button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        eventsList.innerHTML = '<div class="loading">Error loading events.</div>';
    }
}

// Delete event
async function deleteEvent(id) {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
        const response = await fetch(`${API_BASE}/events/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadEvents();
        } else {
            alert('Failed to delete event');
        }
    } catch (error) {
        alert('Error deleting event');
    }
}

// Edit event
async function editEvent(id) {
    try {
        const response = await fetch(`${API_BASE}/events/${id}`);
        const event = await response.json();

        currentEditType = 'event';
        currentEditId = id;

        document.getElementById('modalTitle').textContent = 'Edit Event';
        document.getElementById('editFormFields').innerHTML = `
            <div class="form-grid">
                <div class="form-group">
                    <label for="edit-title">Event Title *</label>
                    <input type="text" id="edit-title" name="title" value="${event.title}" required>
                </div>
                <div class="form-group">
                    <label for="edit-date">Event Date *</label>
                    <input type="date" id="edit-date" name="date" value="${event.date}" required>
                </div>
                <div class="form-group full-width">
                    <label for="edit-description">Description *</label>
                    <textarea id="edit-description" name="description" rows="4" required>${event.description}</textarea>
                </div>
                <div class="form-group">
                    <label for="edit-category">Category *</label>
                    <select id="edit-category" name="category" required>
                        <option value="Workshop" ${event.category === 'Workshop' ? 'selected' : ''}>Workshop</option>
                        <option value="Hackathon" ${event.category === 'Hackathon' ? 'selected' : ''}>Hackathon</option>
                        <option value="Conference" ${event.category === 'Conference' ? 'selected' : ''}>Conference</option>
                        <option value="Seminar" ${event.category === 'Seminar' ? 'selected' : ''}>Seminar</option>
                        <option value="Cultural" ${event.category === 'Cultural' ? 'selected' : ''}>Cultural</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-image">New Image (optional)</label>
                    <input type="file" id="edit-image" name="image" accept="image/*">
                </div>
            </div>
        `;

        document.getElementById('editModal').classList.add('active');
    } catch (error) {
        alert('Error loading event details');
    }
}

// ============ FACULTY MANAGEMENT ============

// Faculty form submission
document.getElementById('facultyForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = e.target.querySelector('.btn-submit');
    const submitText = document.getElementById('facultySubmitText');
    const submitLoader = document.getElementById('facultySubmitLoader');
    const statusMessage = document.getElementById('facultyStatusMessage');

    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline-block';

    try {
        const formData = new FormData(e.target);

        const response = await fetch(`${API_BASE}/faculty`, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            statusMessage.textContent = 'Faculty added successfully!';
            statusMessage.className = 'status-message success';
            e.target.reset();
            document.getElementById('facultyImagePreview').classList.remove('active');
            loadFaculty();
        } else {
            throw new Error('Failed to add faculty');
        }
    } catch (error) {
        statusMessage.textContent = 'Error adding faculty. Please try again.';
        statusMessage.className = 'status-message error';
    } finally {
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoader.style.display = 'none';
    }
});

// Faculty image preview
document.getElementById('faculty-image').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const preview = document.getElementById('facultyImagePreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            preview.classList.add('active');
        };
        reader.readAsDataURL(file);
    } else {
        preview.classList.remove('active');
    }
});

// Load and display faculty
async function loadFaculty() {
    const facultyList = document.getElementById('facultyList');
    facultyList.innerHTML = '<div class="loading">Loading faculty...</div>';

    try {
        const response = await fetch(`${API_BASE}/faculty`);
        const faculty = await response.json();

        if (faculty.length === 0) {
            facultyList.innerHTML = '<div class="loading">No faculty found.</div>';
            return;
        }

        facultyList.innerHTML = faculty.map(member => `
            <div class="event-card">
                ${member.image_url ? `<img src="${member.image_url}" alt="${member.name}" class="event-image">` : ''}
                <div class="event-content">
                    <span class="event-category">${member.designation}</span>
                    <h3 class="event-title">${member.name}</h3>
                    ${member.department ? `<p class="event-date">${member.department}</p>` : ''}
                    ${member.email ? `<p class="event-description">📧 ${member.email}</p>` : ''}
                    ${member.phone ? `<p class="event-description">📞 ${member.phone}</p>` : ''}
                    ${member.specialization ? `<p class="event-description">🎓 ${member.specialization}</p>` : ''}
                    <button class="btn-edit" onclick="editFaculty('${member.id}')">Edit Faculty</button>
                    <button class="btn-delete" onclick="deleteFaculty('${member.id}')">Delete Faculty</button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        facultyList.innerHTML = '<div class="loading">Error loading faculty.</div>';
    }
}

// Delete faculty
async function deleteFaculty(id) {
    if (!confirm('Are you sure you want to delete this faculty member?')) return;

    try {
        const response = await fetch(`${API_BASE}/faculty/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadFaculty();
        } else {
            alert('Failed to delete faculty');
        }
    } catch (error) {
        alert('Error deleting faculty');
    }
}

// Edit faculty
async function editFaculty(id) {
    try {
        const response = await fetch(`${API_BASE}/faculty/${id}`);
        const faculty = await response.json();

        currentEditType = 'faculty';
        currentEditId = id;

        document.getElementById('modalTitle').textContent = 'Edit Faculty';
        document.getElementById('editFormFields').innerHTML = `
            <div class="form-grid">
                <div class="form-group">
                    <label for="edit-name">Name *</label>
                    <input type="text" id="edit-name" name="name" value="${faculty.name}" required>
                </div>
                <div class="form-group">
                    <label for="edit-designation">Designation *</label>
                    <input type="text" id="edit-designation" name="designation" value="${faculty.designation}" required>
                </div>
                <div class="form-group">
                    <label for="edit-department">Department</label>
                    <input type="text" id="edit-department" name="department" value="${faculty.department || ''}">
                </div>
                <div class="form-group">
                    <label for="edit-email">Email</label>
                    <input type="email" id="edit-email" name="email" value="${faculty.email || ''}">
                </div>
                <div class="form-group">
                    <label for="edit-phone">Phone</label>
                    <input type="tel" id="edit-phone" name="phone" value="${faculty.phone || ''}">
                </div>
                <div class="form-group">
                    <label for="edit-specialization">Specialization</label>
                    <input type="text" id="edit-specialization" name="specialization" value="${faculty.specialization || ''}">
                </div>
                <div class="form-group full-width">
                    <label for="edit-image">New Photo (optional)</label>
                    <input type="file" id="edit-image" name="image" accept="image/*">
                </div>
            </div>
        `;

        document.getElementById('editModal').classList.add('active');
    } catch (error) {
        alert('Error loading faculty details');
    }
}

// ============ MODAL HANDLING ============

// Close modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('editModal').classList.remove('active');
    currentEditType = null;
    currentEditId = null;
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    const modal = document.getElementById('editModal');
    if (e.target === modal) {
        modal.classList.remove('active');
        currentEditType = null;
        currentEditId = null;
    }
});

// Edit form submission
document.getElementById('editForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!currentEditType || !currentEditId) return;

    const submitBtn = e.target.querySelector('.btn-submit');
    const submitText = document.getElementById('editSubmitText');
    const submitLoader = document.getElementById('editSubmitLoader');
    const statusMessage = document.getElementById('editStatusMessage');

    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline-block';

    try {
        const formData = new FormData(e.target);
        const endpoint = currentEditType === 'event' ? 'events' : 'faculty';

        const response = await fetch(`${API_BASE}/${endpoint}/${currentEditId}`, {
            method: 'PUT',
            body: formData
        });

        if (response.ok) {
            statusMessage.textContent = `${currentEditType === 'event' ? 'Event' : 'Faculty'} updated successfully!`;
            statusMessage.className = 'status-message success';

            setTimeout(() => {
                document.getElementById('editModal').classList.remove('active');
                if (currentEditType === 'event') {
                    loadEvents();
                } else {
                    loadFaculty();
                }
                currentEditType = null;
                currentEditId = null;
            }, 1500);
        } else {
            throw new Error('Failed to update');
        }
    } catch (error) {
        statusMessage.textContent = 'Error updating. Please try again.';
        statusMessage.className = 'status-message error';
    } finally {
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoader.style.display = 'none';
    }
});
