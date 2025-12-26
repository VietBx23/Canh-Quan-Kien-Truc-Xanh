'use server';
import admin from 'firebase-admin';

// Type for Firebase Admin credentials
interface FirebaseAdminCreds {
  projectId: string;
  clientEmail: string;
  privateKey: string;
}

// Function to get credentials from environment variables
function getAdminCredentials(): FirebaseAdminCreds {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      'Firebase Admin credentials are not set in environment variables. Please check NEXT_PUBLIC_FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY.'
    );
  }

  // Ensure the private key is correctly formatted
  const formattedPrivateKey = privateKey.replace(/\\n/g, '\n');

  return { projectId, clientEmail, privateKey: formattedPrivateKey };
}

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  try {
    const credentials = getAdminCredentials();
    admin.initializeApp({
      credential: admin.credential.cert(credentials),
    });
  } catch (error) {
    // Log a more descriptive error message
    console.error('FATAL: Firebase Admin SDK initialization failed.', error);
    // In a real application, you might want to prevent the app from starting
    // or handle this more gracefully, but for now, logging is crucial.
  }
}

// Export the initialized firestore instance
export const adminDb = admin.firestore();
