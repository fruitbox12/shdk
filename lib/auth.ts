import { signIn as nextAuthSignIn, signOut as nextAuthSignOut, useSession } from 'next-auth/react';

export const authInstance = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const authenticated = !!session;

  return { session, loading, authenticated };
};

export const useAuth = () => {
  const { session, loading, authenticated } = authInstance();

  return { session, loading, authenticated };
};

export const signIn = (callback?: () => void) => {
  nextAuthSignIn('github')
    .then(() => {
      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      console.error('Sign in error', error);
    });
};

export const signOut = (callback?: () => void) => {
  nextAuthSignOut()
    .then(() => {
      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      console.error('Sign out error', error);
    });
};