import Logo from '@/app/components/Logo/logo'
import MainMenu from '../MainMenu/MainMenu'


export default function NavBar() {
  return (
    <div className="p-4 flex z-50 flex-col items-center border-b-[1px] border-b-white/30 fixed w-full backdrop-blur">
      <Logo />
      <MainMenu />
    </div>
  )
}
