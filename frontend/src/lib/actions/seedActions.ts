
'use server';

import { MongoClient } from 'mongodb';
import getClient from '@/lib/mongodb';
import { projects as projectsToSeed } from '@/lib/data/projects'; // Import from the restored file

/**
 * Seeds the 'projects' collection in MongoDB with static data.
 * This is an idempotent operation. It checks for existing documents
 * with the same ID before writing to avoid duplicates.
 */
export async function seedProjects(): Promise<{
  success: boolean;
  message: string;
  count: number;
}> {
  let client: MongoClient | null = null;
  try {
    client = await getClient();
    const db = client.db(); // Use default database from connection string
    const projectsCollection = db.collection('projects');
    
    let writeCount = 0;

    for (const project of projectsToSeed) {
      // Check if a project with the same ID already exists
      const existingProject = await projectsCollection.findOne({ id: project.id });

      // If it doesn't exist, insert it
      if (!existingProject) {
        // Ensure we are inserting a plain object without _id
        const { ...projectData } = project;
        await projectsCollection.insertOne(projectData);
        writeCount++;
      }
    }

    if (writeCount > 0) {
      return {
        success: true,
        message: `Successfully seeded ${writeCount} new projects.`,
        count: writeCount,
      };
    }

    return {
      success: true,
      message: 'Database already up-to-date. No new projects were added.',
      count: 0,
    };
  } catch (error) {
    console.error('Error seeding projects:', error);
    let errorMessage = 'An unknown error occurred.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return {
      success: false,
      message: `Error seeding projects: ${errorMessage}`,
      count: 0,
    };
  }
}
