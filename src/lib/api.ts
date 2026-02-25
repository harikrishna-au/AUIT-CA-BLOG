// API Configuration - Single source of truth for all backend communication
const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5001',
    ENDPOINTS: {
        EVENTS: '/api/events',
        FACULTY: '/api/faculty',
        HEALTH: '/health',
    },
    TIMEOUT: 10000, // 10 seconds
};

// Event Interface
export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    category: 'Workshop' | 'Hackathon' | 'Conference' | 'Seminar' | 'Cultural';
    image_url?: string;
    created_at: string;
}

// Faculty Interface
export interface Faculty {
    id: string;
    name: string;
    designation: string;
    department?: string;
    email?: string;
    phone?: string;
    specialization?: string;
    image_url?: string;
    created_at: string;
}


// Base API Client
class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request<T>(
        endpoint: string,
        options?: RequestInit
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options?.headers,
                },
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`API request failed for ${endpoint}:`, error);
            throw error;
        }
    }

    // Events API
    async getEvents(): Promise<Event[]> {
        return this.request<Event[]>(API_CONFIG.ENDPOINTS.EVENTS);
    }

    async getEventById(id: string): Promise<Event> {
        return this.request<Event>(`${API_CONFIG.ENDPOINTS.EVENTS}/${id}`);
    }

    async createEvent(formData: FormData): Promise<Event> {
        const url = `${this.baseUrl}${API_CONFIG.ENDPOINTS.EVENTS}`;
        const response = await fetch(url, {
            method: 'POST',
            body: formData, // Don't set Content-Type for FormData
        });

        if (!response.ok) {
            throw new Error(`Failed to create event: ${response.statusText}`);
        }

        return await response.json();
    }

    async deleteEvent(id: string): Promise<void> {
        const url = `${this.baseUrl}${API_CONFIG.ENDPOINTS.EVENTS}/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Failed to delete event: ${response.statusText}`);
        }
    }

    // Faculty API
    async getFaculty(): Promise<Faculty[]> {
        return this.request<Faculty[]>(API_CONFIG.ENDPOINTS.FACULTY);
    }

    async getFacultyById(id: string): Promise<Faculty> {
        return this.request<Faculty>(`${API_CONFIG.ENDPOINTS.FACULTY}/${id}`);
    }

    async createFaculty(formData: FormData): Promise<Faculty> {
        const url = `${this.baseUrl}${API_CONFIG.ENDPOINTS.FACULTY}`;
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Failed to create faculty: ${response.statusText}`);
        }

        return await response.json();
    }

    async updateFaculty(id: string, formData: FormData): Promise<Faculty> {
        const url = `${this.baseUrl}${API_CONFIG.ENDPOINTS.FACULTY}/${id}`;
        const response = await fetch(url, {
            method: 'PUT',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Failed to update faculty: ${response.statusText}`);
        }

        return await response.json();
    }

    async deleteFaculty(id: string): Promise<void> {
        const url = `${this.baseUrl}${API_CONFIG.ENDPOINTS.FACULTY}/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Failed to delete faculty: ${response.statusText}`);
        }
    }

    // Health Check
    async healthCheck(): Promise<{ status: string }> {
        return this.request<{ status: string }>(API_CONFIG.ENDPOINTS.HEALTH);
    }
}

// Export singleton instance
export const api = new ApiClient(API_CONFIG.BASE_URL);

// Export config for direct access if needed
export { API_CONFIG };
