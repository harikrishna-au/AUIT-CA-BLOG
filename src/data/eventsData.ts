export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    category: "Workshop" | "Hackathon" | "Conference" | "Seminar" | "Cultural";
    image_url?: string;
    created_at: string;
}
