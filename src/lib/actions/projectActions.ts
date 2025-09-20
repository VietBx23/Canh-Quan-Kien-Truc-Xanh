
'use server';

import db from '@/lib/db';
import type { Project } from '@/lib/data/projects';

export async function getAllProjects(): Promise<Project[]> {
  try {
    // For simplicity, we assume the table is named `projects`
    // and the columns match the Project type exactly.
    const [rows] = await db.query('SELECT * FROM projects ORDER BY id DESC');
    
    // The mysql2 driver returns a RowDataPacket array, which needs to be cast.
    // This is a safe cast if your DB schema matches the type.
    const projects = rows as Project[];
    
    // A simple validation to ensure we got an array.
    if (!Array.isArray(projects)) {
        console.error("Query did not return an array:", projects);
        return [];
    }

    return projects;
  } catch (error) {
    console.error('Failed to fetch projects from database:', error);
    // In case of an error, return an empty array to prevent the page from crashing.
    return [];
  }
}
