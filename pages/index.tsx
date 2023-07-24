import { signIn, useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user]);

  return (
    <div>
      <h1>Welcome to Vercel Dashboard</h1>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
};

export default HomePage;