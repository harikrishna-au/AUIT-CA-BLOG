export interface Event {
    id: string;
    title: string;
    description: string; // Short summary
    detailedDescription?: string; // Long rich text
    date: string;
    time: string;
    location: string;
    category: "Workshop" | "Hackathon" | "Conference" | "Seminar" | "Cultural";
    status: "Upcoming" | "Completed" | "Ongoing" | "Registrations Open";
    image?: string;
    highlights?: string[];
    themes?: { title: string; description: string }[];
    faqs?: { question: string; answer: string }[];
}

export const eventsData: Event[] = [
    {
        id: "hack-001",
        title: "Build Bharat AI Hackathon",
        description: "A national-level AI hackathon where brilliance meets breakthrough. Launchpad to build, innovate, and solve real-world problems.",
        detailedDescription: `
            Get ready for an electrifying 2-day AI Hackathon where creativity meets cutting-edge tech! Whether you're an AI prodigy or just stepping into the world of innovation, this is your chance to shine.

            Join forces with brilliant minds, tackle real-world problem statements, and create impactful AI-driven solutions. From machine learning marvels to smart web/mobile apps, we’re giving you the tools to turn ideas into reality.

            Expect intense coding sprints, mentorship from industry leaders, non-stop collaboration, and loads of fun! Oh—and yes, there’s plenty of swag, prizes, and AU Fest access waiting for you.
        `,
        date: "16-17 Apr 2025",
        time: "09:00 AM",
        location: "Algorithm Block, AU College of Engineering",
        category: "Hackathon",
        status: "Completed",
        image: "/event-image.jpg",
        highlights: [
            "₹1 Lakh Prize Pool – Build bold. Win big.",
            "Certification & Swag – Show off your hustle.",
            "Problem Statements Revealed Early – Get a head start!",
            "Mentorship from Tech Giants – Code with the pros.",
            "National-Level Recognition – Get spotted by recruiters.",
            "Meals Included: Lunch, Dinner, Breakfast provided."
        ],
        themes: [
            { title: "Waste Reduction with AI", description: "Smarter ways to reduce waste using technology and predictive analytics." },
            { title: "Eco-Friendly Business", description: "Sustainable product recommendations and green business models." },
            { title: "Disaster Preparedness", description: "AI solutions for relief management and early warning systems." },
            { title: "Mental Health", description: "Tech for well-being, stress tracking, and support systems." },
            { title: "Open Innovation", description: "Solve real-world problems with bold, boundary-pushing ideas." }
        ],
        faqs: [
            { question: "What is the team size?", answer: "3 to 5 Members per team." },
            { question: "Is there a registration fee?", answer: "₹399 per person (Non-refundable)." },
            { question: "Who can participate?", answer: "Open to students and innovators from all colleges." },
            { question: "Are meals provided?", answer: "Yes! Lunch & dinner on April 16th, breakfast & lunch on April 17th." }
        ]
    }
];
