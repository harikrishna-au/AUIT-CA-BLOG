-- Remove duplicate faculty records with the same name
-- This keeps only the most recent record (highest created_at) for each name

-- Step 1: Check which records will be deleted (optional - run this first to verify)
SELECT f1.*
FROM faculty f1
WHERE EXISTS (
    SELECT 1
    FROM faculty f2
    WHERE f2.name = f1.name
    AND f2.created_at > f1.created_at
);

-- Step 2: Delete the duplicates (keeps the most recent record for each name)
DELETE FROM faculty
WHERE id IN (
    SELECT f1.id
    FROM faculty f1
    WHERE EXISTS (
        SELECT 1
        FROM faculty f2
        WHERE f2.name = f1.name
        AND f2.created_at > f1.created_at
    )
);

-- Step 3: Verify the results - should show only unique names
SELECT * FROM faculty ORDER BY name;

-- Alternative: If you want to keep the OLDEST record instead, use this:
-- DELETE FROM faculty
-- WHERE id NOT IN (
--     SELECT MIN(id)
--     FROM faculty
--     GROUP BY name
-- );
