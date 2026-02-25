# API Client Usage Guide

## Quick Start

The entire frontend uses a single centralized API client located at `src/lib/api.ts`.

### Import the API Client

```typescript
import { api } from '@/lib/api';
```

### Fetch All Events

```typescript
const events = await api.getEvents();
```

### Fetch Single Event

```typescript
const event = await api.getEventById('event-id-here');
```

### Create Event (Admin Only)

```typescript
const formData = new FormData();
formData.append('title', 'My Event');
formData.append('description', 'Event description');
formData.append('date', '2026-03-15');
formData.append('category', 'Workshop');
formData.append('image', fileInput.files[0]);

const newEvent = await api.createEvent(formData);
```

### Delete Event (Admin Only)

```typescript
await api.deleteEvent('event-id-here');
```

### Health Check

```typescript
const health = await api.healthCheck();
console.log(health.status); // "healthy"
```

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```bash
VITE_API_URL=http://localhost:5001
```

For production:

```bash
VITE_API_URL=https://your-production-api.com
```

### API Endpoints

All endpoints are centralized in the API config:

```typescript
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5001',
  ENDPOINTS: {
    EVENTS: '/api/events',
    HEALTH: '/health',
  },
};
```

## Error Handling

The API client automatically handles errors:

```typescript
try {
  const events = await api.getEvents();
} catch (error) {
  console.error('Failed to fetch events:', error);
  // Show error message to user
}
```

## Type Safety

All API methods are fully typed:

```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'Workshop' | 'Hackathon' | 'Conference' | 'Seminar' | 'Cultural';
  image_url?: string;
  created_at: string;
}
```

## Adding New Endpoints

To add a new endpoint:

1. Add to `API_CONFIG.ENDPOINTS`:
   ```typescript
   ENDPOINTS: {
     EVENTS: '/api/events',
     HEALTH: '/health',
     NEW_ENDPOINT: '/api/new',  // Add here
   },
   ```

2. Add method to `ApiClient` class:
   ```typescript
   async getNewData(): Promise<NewType> {
     return this.request<NewType>(API_CONFIG.ENDPOINTS.NEW_ENDPOINT);
   }
   ```

3. Use anywhere in the app:
   ```typescript
   const data = await api.getNewData();
   ```

## Best Practices

1. **Always use the centralized `api` instance** - Don't create new fetch calls
2. **Handle errors gracefully** - Show user-friendly messages
3. **Use TypeScript types** - Import `Event` interface from `@/lib/api`
4. **Configure via environment** - Use `.env` for different environments
5. **Keep API logic in one place** - All API methods in `lib/api.ts`

## Example Component

```typescript
import { useState, useEffect } from 'react';
import { api, type Event } from '@/lib/api';

function MyComponent() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getEvents();
      setEvents(data);
    } catch (err) {
      setError('Failed to load events');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>{event.title}</div>
      ))}
    </div>
  );
}
```

## Summary

✅ Single source of truth for all API calls  
✅ Type-safe methods  
✅ Centralized error handling  
✅ Environment-based configuration  
✅ Easy to extend with new endpoints
