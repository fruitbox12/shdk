import React from 'react';
import Navbar from './Navbar';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

const Layout: React.FC = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) {
      router.push('/api/auth/signin');
    }
  }, [user, loading]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;