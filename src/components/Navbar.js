import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 px-4 md:px-10 border-b border-base-content/10">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl font-bold tracking-tighter">
          WALID<span className="text-primary">JLASSI</span>
        </a>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Tech Stack</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </div>
      <div className="flex-none">
        <a href="#contact" className="btn btn-primary btn-sm rounded-full px-6">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
