// Re-export from centralized API client
export { api, type Event, type Faculty } from '@/lib/api';

// Import api for use in convenience functions
import { api } from '@/lib/api';

// Convenience functions for backward compatibility
export const fetchEvents = () => api.getEvents();
export const fetchEventById = (id: string) => api.getEventById(id);
export const fetchFaculty = () => api.getFaculty();
export const fetchFacultyById = (id: string) => api.getFacultyById(id);
