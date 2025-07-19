import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const nameMap: { [key: string]: string } = {
    'toys': 'Toys',
    'categories': 'Categories',
    'products': 'All Toys',
    'plush-toys': 'Plush Toys',
    'building-sets': 'Building Sets',
    'vehicles': 'Vehicles',
    'dolls-playsets': 'Dolls & Playsets',
    'educational-toys': 'Educational Toys',
    'musical-toys': 'Musical Toys',
    'role-play': 'Role Play & Dress Up',
    'about': 'About  Us',
    'contact': 'Contact  Us',
    'cart': 'Cart',
    'checkout': 'Checkout',
    'profile': 'Profile',

    
  };

  return (
    <nav className="flex items-center space-x-2 text-sm font-medium text-gray-600 mb-6 px-4">
      <Link to="/" className="hover:text-purple-600 transition-colors" style={{ fontFamily: "'Fredoka One', cursive" }}>
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = nameMap[value.toLowerCase()] || value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

        return (
          <React.Fragment key={to}>
            <ChevronRight className="h-4 w-4 text-pink-400" />
            {last ? (
              <span className="text-purple-700" style={{ fontFamily: "'Fredoka One', cursive" }}>{displayName}</span>
            ) : (
              <Link to={to} className="hover:text-purple-600 transition-colors" style={{ fontFamily: "'Fredoka One', cursive" }}>
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};