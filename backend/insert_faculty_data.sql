-- Insert Faculty Data for IT & Computer Applications Department
-- Run this in your Supabase SQL Editor

INSERT INTO faculty (name, designation, department, email, phone, specialization)
VALUES
  (
    'Prof. D. Lalitha Bhaskari',
    'Professor & Head of the Department',
    'IT & Computer Applications',
    NULL,
    NULL,
    'Security, Theory of Computation, Image Processing, Network Security and Cryptography'
  ),
  (
    'Dr. M. Ramjee',
    'Professor (Adjunct)',
    'IT & Computer Applications',
    NULL,
    NULL,
    'Machine Learning, Data Mining'
  ),
  (
    'Prof. Gogula Suvarna Kumar',
    'Professor (Adhoc)',
    'IT & Computer Applications',
    'Prof.gsuvarnakumar@andhrauniversity.edu.in',
    NULL,
    'AI, ML, Cyber security, Computer Networks, Entrepreneurship Development'
  ),
  (
    'Mr. V. Nagaraju',
    'Assistant Professor (Contract)',
    'IT & Computer Applications',
    NULL,
    NULL,
    'Distributed Operating Systems, Operations Research, Data Mining & Data Warehousing'
  );

-- Verify the data was inserted
SELECT * FROM faculty ORDER BY created_at DESC;
