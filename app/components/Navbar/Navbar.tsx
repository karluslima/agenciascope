'use client'
import MainMenu from '../MainMenu/MainMenu'
import { useEffect, useState } from 'react'
import Logo from '@/app/components/Logo/logo'


export default function NavBar() {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    window.scrollY >= 100 ? setColor(true) : setColor(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', changeColor)
  }, []);

  return (
    <div className={color ? 'navbar bg-white' : 'navbar'}>
      <div className="mx-auto flex w-full flex-col items-center md:justify-around md:flex-row">
        <Logo />
        <MainMenu />
      </div>
    </div>
  )
}