import React, { ReactNode } from 'react';
import './globals.css'; // Import global styles
import Navbar from 'components/navbar'; // Import the Navbar component
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children: ReactNode; // Use ReactNode type for the children prop
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Include the Navbar component */}
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
