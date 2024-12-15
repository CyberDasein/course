import React from 'react';
import { Link } from 'react-router-dom';
import { internalPaths } from '../paths';

export function Navigation() {
  return (
    <nav className="bg-[#44281d] text-[#97ce4c] p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to={internalPaths.home} className="hover:text-[#ff9800]">Home</Link>
        </li>
        <li>
          <Link to={internalPaths.category("characters")} className="hover:text-[#ff9800]">Characters</Link>
        </li>
        <li>
          <Link to={internalPaths.category("locations")} className="hover:text-[#ff9800]">Locations</Link>
        </li>
        <li>
          <Link to={internalPaths.category("episodes")} className="hover:text-[#ff9800]">Episodes</Link>
        </li>
      </ul>
    </nav>
  );
}

