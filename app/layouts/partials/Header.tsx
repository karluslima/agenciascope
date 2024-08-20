import Button from "@/app/components/Button/button";
import NavBar from "@/app/components/Navbar/Navbar";
import { Roboto, Roboto_Condensed } from "next/font/google";

const roboto_condensed = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap'
});


export default function Header() {
  return (
    <header className="h-screen bg-cover bg-header-bg bg-fixed" id="welcome">
      <div className="bg-overlay bg-black/[.3] w-full h-screen absolute"></div>
      <NavBar />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center flex flex-col">
        <h1 className={roboto_condensed.className + " text-white font-semibold lg:text-7xl md:text-5xl text-3xl text-center mb-6"}>
          Soluções digitais <br />resultados reais
        </h1>
        <Button buttonType="transparent" label="O que fazemos?" />
      </div>
    </header>
  )
}
