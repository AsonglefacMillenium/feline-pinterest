import React from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => (
  <nav className="navbar">
    <span className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>
      Все котики
    </span>
    <span className={activeTab === 'favorites' ? 'active' : ''} onClick={() => setActiveTab('favorites')}>
      Любимые котики
    </span>
  </nav>
);

export default Navbar;
