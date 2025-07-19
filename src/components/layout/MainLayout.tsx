import React from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="pt-20 min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </div>
        <Footer />

    </>
  );
};

export default MainLayout;