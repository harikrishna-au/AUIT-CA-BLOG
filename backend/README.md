# Event Management Backend API

A minimal Flask-based REST API for managing event posts with Supabase integration.

## Features

- ✅ Create, read, and delete events
- ✅ Image upload to Supabase Storage
- ✅ CORS enabled for frontend integration
- ✅ UUID-based event IDs
- ✅ Public image URLs from Supabase

## Prerequisites

- Python 3.8+
- Supabase account with a project created
- Supabase Storage bucket named `event-images` (with public access)

## Setup Instructions

### 1. Supabase Configuration

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Navigate to **SQL Editor**
3. Run the SQL script from `schema.sql` to create the events table
4. Navigate to **Storage**
5. Create a new bucket named `event-images`
6. Set the bucket to **Public** access

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On macOS/Linux
# venv\Scripts\activate   # On Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env and add your Supabase credentials
```

### 3. Environment Variables

Edit `.env` file and add your Supabase credentials:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
STORAGE_BUCKET=event-images
CORS_ORIGINS=http://localhost:5173
```

You can find your Supabase URL and anon key in:
- Supabase Dashboard → Settings → API

### 4. Run the Server

```bash
python app.py
```

Server will start at `http://localhost:5000`

## API Endpoints

### Health Check
```bash
GET /health
```

### Get All Events
```bash
GET /api/events
```

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Event Title",
    "description": "Event description",
    "date": "2026-03-15",
    "category": "Workshop",
    "image_url": "https://...",
    "created_at": "2026-02-12T10:00:00Z"
  }
]
```

### Get Single Event
```bash
GET /api/events/<event_id>
```

### Create Event
```bash
POST /api/events
Content-Type: multipart/form-data

Form Data:
- title (required): Event title
- description: Event description
- date (required): Event date (YYYY-MM-DD)
- category: Event category
- image: Image file (optional)
```

**Example with curl:**
```bash
curl -X POST http://localhost:5000/api/events \
  -F "title=Tech Workshop" \
  -F "description=AI and ML workshop" \
  -F "date=2026-03-15" \
  -F "category=Workshop" \
  -F "image=@/path/to/image.jpg"
```

### Delete Event
```bash
DELETE /api/events/<event_id>
```

## Testing

### Using curl

1. **Create an event:**
```bash
curl -X POST http://localhost:5000/api/events \
  -F "title=Test Event" \
  -F "description=This is a test" \
  -F "date=2026-03-20" \
  -F "category=Test" \
  -F "image=@test-image.jpg"
```

2. **Get all events:**
```bash
curl http://localhost:5000/api/events
```

3. **Delete an event:**
```bash
curl -X DELETE http://localhost:5000/api/events/<event-id>
```

### Using Frontend

Update your frontend to make API calls to `http://localhost:5000/api/events`

## File Structure

```
backend/
├── app.py                # Main Flask application
├── supabase_client.py    # Supabase helper functions
├── requirements.txt      # Python dependencies
├── schema.sql           # Database schema
├── .env.example         # Environment template
├── .gitignore          # Git ignore patterns
└── README.md           # This file
```

## Troubleshooting

### CORS Errors
- Make sure `CORS_ORIGINS` in `.env` matches your frontend URL
- Check that the frontend is running on the specified port

### Image Upload Fails
- Verify the Supabase Storage bucket `event-images` exists
- Ensure the bucket has public access enabled
- Check that `SUPABASE_KEY` has storage permissions

### Database Errors
- Verify the `events` table was created using `schema.sql`
- Check that RLS policies are properly configured
- Ensure `SUPABASE_URL` and `SUPABASE_KEY` are correct

## License

MIT
