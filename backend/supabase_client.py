import os
from supabase import create_client, Client
from dotenv import load_dotenv
from datetime import datetime
import uuid

# Load environment variables
load_dotenv()

# Initialize Supabase client
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
STORAGE_BUCKET = os.getenv("STORAGE_BUCKET", "event-images")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set in .env file")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


def get_all_events():
    """Fetch all events from Supabase"""
    try:
        response = supabase.table("events").select("*").order("created_at", desc=True).execute()
        return response.data
    except Exception as e:
        print(f"Error fetching events: {e}")
        return []


def get_event_by_id(event_id):
    """Fetch a single event by ID"""
    try:
        response = supabase.table("events").select("*").eq("id", event_id).execute()
        return response.data[0] if response.data else None
    except Exception as e:
        print(f"Error fetching event: {e}")
        return None


def create_event(title, description, date, category, image_url=None):
    """Create a new event in Supabase"""
    try:
        event_data = {
            "title": title,
            "description": description,
            "date": date,
            "category": category,
            "image_url": image_url
        }
        response = supabase.table("events").insert(event_data).execute()
        return response.data[0] if response.data else None
    except Exception as e:
        print(f"Error creating event: {e}")
        return None


def delete_event(event_id):
    """Delete an event from Supabase"""
    try:
        response = supabase.table("events").delete().eq("id", event_id).execute()
        return True
    except Exception as e:
        print(f"Error deleting event: {e}")
        return False


def upload_image_to_storage(file, filename):
    """Upload image to Supabase Storage"""
    try:
        # Generate unique filename
        file_ext = filename.rsplit('.', 1)[1].lower() if '.' in filename else 'jpg'
        unique_filename = f"{uuid.uuid4()}.{file_ext}"
        
        # Upload to Supabase Storage
        response = supabase.storage.from_(STORAGE_BUCKET).upload(
            unique_filename,
            file,
            {"content-type": f"image/{file_ext}"}
        )
        
        # Get public URL
        public_url = supabase.storage.from_(STORAGE_BUCKET).get_public_url(unique_filename)
        
        return public_url
    except Exception as e:
        print(f"Error uploading image: {e}")
        return None


def delete_image_from_storage(image_url):
    """Delete image from Supabase Storage"""
    try:
        # Extract filename from URL
        filename = image_url.split('/')[-1]
        supabase.storage.from_(STORAGE_BUCKET).remove([filename])
        return True
    except Exception as e:
        print(f"Error deleting image: {e}")
        return False


# ============ FACULTY FUNCTIONS ============

def get_all_faculty():
    """Fetch all faculty from Supabase"""
    try:
        response = supabase.table("faculty").select("*").order("created_at", desc=True).execute()
        return response.data
    except Exception as e:
        print(f"Error fetching faculty: {e}")
        return []


def get_faculty_by_id(faculty_id):
    """Fetch a single faculty member by ID"""
    try:
        response = supabase.table("faculty").select("*").eq("id", faculty_id).execute()
        return response.data[0] if response.data else None
    except Exception as e:
        print(f"Error fetching faculty: {e}")
        return None


def create_faculty(name, designation, department=None, email=None, phone=None, specialization=None, image_url=None):
    """Create a new faculty member in Supabase"""
    try:
        faculty_data = {
            "name": name,
            "designation": designation,
            "department": department,
            "email": email,
            "phone": phone,
            "specialization": specialization,
            "image_url": image_url
        }
        response = supabase.table("faculty").insert(faculty_data).execute()
        return response.data[0] if response.data else None
    except Exception as e:
        print(f"Error creating faculty: {e}")
        return None


def update_faculty(faculty_id, name=None, designation=None, department=None, email=None, phone=None, specialization=None, image_url=None):
    """Update a faculty member in Supabase"""
    try:
        faculty_data = {}
        if name is not None:
            faculty_data["name"] = name
        if designation is not None:
            faculty_data["designation"] = designation
        if department is not None:
            faculty_data["department"] = department
        if email is not None:
            faculty_data["email"] = email
        if phone is not None:
            faculty_data["phone"] = phone
        if specialization is not None:
            faculty_data["specialization"] = specialization
        if image_url is not None:
            faculty_data["image_url"] = image_url
        
        response = supabase.table("faculty").update(faculty_data).eq("id", faculty_id).execute()
        return response.data[0] if response.data else None
    except Exception as e:
        print(f"Error updating faculty: {e}")
        return None


def delete_faculty(faculty_id):
    """Delete a faculty member from Supabase"""
    try:
        response = supabase.table("faculty").delete().eq("id", faculty_id).execute()
        return True
    except Exception as e:
        print(f"Error deleting faculty: {e}")
        return False
