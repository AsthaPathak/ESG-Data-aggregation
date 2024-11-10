import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Briefcase, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold">ESG Insight</Link>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<BarChart2 />} text="Dashboard" />
            <NavLink to="/portfolio" icon={<Briefcase />} text="Portfolio" />
            <NavLink to="/about" icon={<Info />} text="About" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;