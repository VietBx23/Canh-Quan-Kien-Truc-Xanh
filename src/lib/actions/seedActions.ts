
'use server';

import { MongoClient } from 'mongodb';
import getClient from '@/lib/mongodb';
import { PlaceHolderImages, type ProjectPlaceholder } from '@/lib/placeholder-images';

function mapPlaceholderToProject(p: ProjectPlaceholder, index: number): any {
    const hint = p.imageHint;
    const title = hint.replace(/-/g, ' ');
    let category: 'Sân Vườn' | 'Hồ Koi' | 'Tiểu Cảnh';
    
    if (hint.includes('koi')) {
        category = 'Hồ Koi';
    } else if (hint.includes('garden') || hint.includes('villa') || hint.includes('patio') || hint.includes('resort') || hint.includes('balcony') || hint.includes('terrace') || hint.includes('entrance') || hint.includes('bbq')) {
        category = 'Sân Vườn';
    } else {
        category = 'Tiểu Cảnh';
    }

    const locations = ["Quận 2, TP.HCM", "Thảo Điền, TP.HCM", "Bình Chánh, TP.HCM", "Gò Vấp, TP.HCM", "Bình Dương", "Vũng Tàu", "Quận 9, TP.HCM", "Quận 7, TP.HCM", "Thủ Đức, TP.HCM"];
    const costs = ["~ 150 triệu", "~ 250 triệu", "~ 80 triệu", "~ 500 triệu", "~ 1 tỷ", "~ 50 triệu"];
    const styles = ["Hiện đại", "Nhiệt đới", "Zen Nhật Bản", "Tối giản", "Cổ điển"];

    // Return a plain object, not a Project type
    return {
        id: p.id,
        title: title,
        category: category,
        imageUrl: p.imageUrl,
        imageHint: p.imageHint,
        date: `2024`,
        location: locations[index % locations.length],
        cost: costs[index % costs.length],
        style: styles[index % styles.length]
    };
}

const projectsToSeed = PlaceHolderImages
    .filter(p => p.id.startsWith('gallery-'))
    .map(mapPlaceholderToProject);


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
        await projectsCollection.insertOne(project);
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
