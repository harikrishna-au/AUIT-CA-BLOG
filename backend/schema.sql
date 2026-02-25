-- Create events table in Supabase
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  category TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON events
  FOR SELECT
  USING (true);

-- Create policy to allow authenticated insert
CREATE POLICY "Allow authenticated insert" ON events
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated delete
CREATE POLICY "Allow authenticated delete" ON events
  FOR DELETE
  USING (true);

-- Create policy to allow authenticated update
CREATE POLICY "Allow authenticated update" ON events
  FOR UPDATE
  USING (true);
