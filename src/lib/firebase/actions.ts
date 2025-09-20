'use server';

import { adminDb } from './admin';
import { projects as staticProjects } from '@/lib/data/projects';
import { Project } from '@/lib/data/projects';

// Type guard to check if an object has a specific property
function hasOwnProperty<X extends {}, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop);
}

/**
 * Seeds the 'projects' collection in Firestore with static data.
 * This is an idempotent operation. It checks for existing documents
 * with the same ID before writing to avoid duplicates.
 */
export async function seedProjects(): Promise<{
  success: boolean;
  message: string;
  count: number;
}> {
  try {
    const projectsCollection = adminDb.collection('projects');
    const batch = adminDb.batch();
    let writeCount = 0;

    // Use Promise.all to fetch all documents in parallel
    const projectPromises = staticProjects.map((project) => {
       // The ID from static data is a string like "gallery-1".
       // Firestore will use this as the document ID.
      const docRef = projectsCollection.doc(project.id);
      return { docRef, project };
    });

    const results = await Promise.all(projectPromises.map(p => p.docRef.get()));

    results.forEach((docSnapshot, index) => {
        const { docRef, project } = projectPromises[index];
        if (!docSnapshot.exists) {
            // Create a new object for Firestore to avoid any potential issues with prototypes or non-enumerable properties
             const projectData: Project = {
                id: project.id,
                title: project.title,
                category: project.category,
                style: project.style,
                location: project.location,
                cost: project.cost,
                date: project.date,
                imageUrl: project.imageUrl,
                imageHint: project.imageHint,
            };
            batch.set(docRef, projectData);
            writeCount++;
        }
    });

    if (writeCount > 0) {
      await batch.commit();
      return {
        success: true,
        message: `Successfully seeded ${writeCount} new projects.`,
        count: writeCount,
      };
    }

    return {
      success: true,
      message: 'Firestore already up-to-date. No new projects were added.',
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
