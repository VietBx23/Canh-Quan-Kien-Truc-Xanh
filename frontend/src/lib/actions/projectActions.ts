
'use server';

import { MongoClient } from 'mongodb';
import getClient from '@/lib/mongodb';
import type { Project } from '@/lib/data/projects';

// This function fetches all projects from the 'projects' collection in MongoDB.
export async function getAllProjects(): Promise<Project[]> {
  let client: MongoClient | null = null;
  try {
    client = await getClient();
    const db = client.db(); // Use default database from connection string

    const projectsCollection = db.collection<Project>('projects');
    
    // Find all documents, sort by id ascending, and convert to an array.
    const projects = await projectsCollection.find({}).sort({ id: 1 }).toArray();

    // The MongoDB driver correctly types the result, but we need to handle the _id from MongoDB
    return projects.map(p => ({
        id: p.id,
        title: p.title,
        category: p.category,
        style: p.style,
        location: p.location,
        cost: p.cost,
        date: p.date,
        imageUrl: p.imageUrl,
        imageHint: p.imageHint,
    }));

  } catch (error) {
    console.error('Failed to fetch projects from MongoDB:', error);
    // In case of an error, return an empty array to prevent the page from crashing.
    return [];
  } 
}
