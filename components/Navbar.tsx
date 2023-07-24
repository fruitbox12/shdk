import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>
          <Image src="/public/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </Link>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
    </nav>
  );
};

export default Navbar;