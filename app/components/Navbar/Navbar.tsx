'use client'
import MainMenu from '../MainMenu/MainMenu';
import { useEffect, useState, useRef } from 'react';
import Logo from '@/app/components/Logo/logo';

export default function NavBar() {
  const [color, setColor] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener('scroll', changeColor);

    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      ref={navRef}
      className={`navbar shadow ${color ? 'bg-white' : ''}`}
    >
      <div className="mx-auto flex w-full flex-col items-center md:justify-around md:flex-row">
        <Logo />
        <MainMenu />
      </div>
    </div>
  );
}
