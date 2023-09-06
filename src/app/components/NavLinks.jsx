'use client'
import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const NavLinks = ({navLinks}) => {
    const pathname = usePathname()
    return (
        <>
        {navLinks.map((link) => {
          const isActive = pathname === link.href
   
          return (
            <Link
              className={isActive ? 'bg-base-300 font-semibold' : ''}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          )
        })}
      </>
    );
};

export default NavLinks;