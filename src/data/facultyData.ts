// Faculty interface matching backend API
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

// Leadership data (kept as static content)
export const leadershipData = [
  {
    name: "Prof. D. Lalitha Bhaskari",
    designation: "Professor & Head of the Department",
    tenure: "24-12-2025 – Present",
    isCurrent: true,
    role: "HEAD OF DEPARTMENT"
  },
  {
    name: "Prof. Kunjam Nageswara Rao",
    designation: "Professor",
    tenure: "28-11-2022 to 23-12-2025",
    isCurrent: false,
    role: "PREVIOUS HEAD OF THE DEPARTMENT"
  },
  {
    name: "Prof. S. Viziananda Row",
    designation: "Professor",
    tenure: "22-08-2019 to 28-11-2022",
    isCurrent: false,
    role: "FOUNDER HEAD OF THE DEPARTMENT"
  }
];

// Programs data (kept as static content)
export const programsData = {
  undergraduate: [
    {
      name: "B.Tech – Information Technology",
      duration: "4 Years",
      level: "Undergraduate"
    }
  ],
  postgraduate: [
    {
      name: "M.Tech – Information Technology",
      duration: "2 Years",
      level: "Postgraduate"
    },
    {
      name: "M.C.A – Master of Computer Applications",
      duration: "2 Years",
      level: "Postgraduate"
    },
    {
      name: "M.Sc – Computer Science",
      duration: "2 Years",
      level: "Postgraduate"
    }
  ],
  research: [
    {
      name: "Ph.D. – Faculty of Engineering",
      duration: "3-5 Years",
      level: "Research"
    },
    {
      name: "Ph.D. – Faculty of Science",
      duration: "3-5 Years",
      level: "Research"
    }
  ]
};
