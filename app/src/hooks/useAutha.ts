
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
import { initializeApp } from '@firebase/app';

const firebaseConfig = {
  // Your Firebase configuration object
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Check if the user is an admin (you may want to implement your own logic here)
        if (user.email.endsWith('@youradmindomain.com')) {
          setUser(user);
        } else {
          // If not an admin, sign out and redirect
          auth.signOut();
          router.push('/unauthorized');
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  const signOut = () => auth.signOut();

  return { user, loading, signIn, signOut };
};

export default useAuth;

