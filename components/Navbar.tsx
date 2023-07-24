import { signIn, signOut, useAuth } from '../lib/auth';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import vercelSvg from '../public/vercel.svg';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className={styles.navbar} id="navbar">
      <div className={styles.logo}>
        <Image src={vercelSvg} alt="Vercel Logo" width={36} height={36} />
        <h1>Vercel Dashboard</h1>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        {user ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button id="signOutButton" onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button id="signInButton" onClick={() => signIn()}>Sign In</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;