import { useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  onAuthStateChanged, 
  User 
} from 'firebase/auth';
import { auth } from '@/firebaseConfig';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthState(prev => ({
        ...prev,
        user,
        loading: false,
        error: null,
      }));

      // Store token in localStorage for persistence
      if (user) {
        user.getIdToken().then(token => {
          localStorage.setItem('huntnhire_auth_token', token);
        });
      } else {
        localStorage.removeItem('huntnhire_auth_token');
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem('huntnhire_auth_token', token);
      
      setAuthState(prev => ({
        ...prev,
        user: userCredential.user,
        loading: false,
        error: null,
      }));
      
      return userCredential;
    } catch (error: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      localStorage.removeItem('huntnhire_auth_token');
      setAuthState(prev => ({
        ...prev,
        user: null,
        error: null,
      }));
    } catch (error: any) {
      setAuthState(prev => ({
        ...prev,
        error: error.message,
      }));
      throw error;
    }
  };

  const isAuthenticated = !!authState.user;

  return {
    ...authState,
    signIn,
    signOut,
    isAuthenticated,
  };
};
