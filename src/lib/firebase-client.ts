import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getMessaging, isSupported } from "firebase/messaging";

const getFirebaseConfig = () => ({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

// Lazy initialization - only on client side
let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let storage: FirebaseStorage | undefined;

function getAppInstance(): FirebaseApp {
  if (typeof window === 'undefined') {
    throw new Error('Firebase can only be initialized on the client side');
  }
  if (!app) {
    app = getApps().length === 0 ? initializeApp(getFirebaseConfig()) : getApp();
  }
  return app;
}

export function getAuthInstance(): Auth {
  if (!auth) {
    auth = getAuth(getAppInstance());
  }
  return auth;
}

export function getStorageInstance(): FirebaseStorage {
  if (!storage) {
    storage = getStorage(getAppInstance());
  }
  return storage;
}

// Messaging with SSR safety - only initialize on client-side if supported
export const getMessagingInstance = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    return getMessaging(app);
  }
  return null;
};

export { app };
