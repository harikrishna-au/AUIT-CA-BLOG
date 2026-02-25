-- Faculty Table Schema for Supabase
-- Run this in Supabase SQL Editor

-- Create faculty table
CREATE TABLE IF NOT EXISTS faculty (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  designation TEXT NOT NULL,
  department TEXT,
  email TEXT,
  phone TEXT,
  specialization TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE faculty ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow public read access
CREATE POLICY "Allow public read access" ON faculty
  FOR SELECT
  USING (true);

-- Allow authenticated insert
CREATE POLICY "Allow authenticated insert" ON faculty
  FOR INSERT
  WITH CHECK (true);

-- Allow authenticated update
CREATE POLICY "Allow authenticated update" ON faculty
  FOR UPDATE
  USING (true);

-- Allow authenticated delete
CREATE POLICY "Allow authenticated delete" ON faculty
  FOR DELETE
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS faculty_created_at_idx ON faculty(created_at DESC);
