import Button from "@/app/components/Button/button";
import NavBar from "@/app/components/Navbar/Navbar";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ['400', '600'],
  subsets: ["latin"],
  display: 'swap'
});


export default function Header() {
  return (
    <header className="h-screen bg-cover bg-header-bg bg-fixed" id="welcome">
      <div className="bg-overlay bg-black/[.3] w-full h-screen absolute"></div>
      <NavBar />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center flex flex-col">
        <h1 className={nunito.className + " text-white font-semibold	lg:text-7xl md:text-5xl text-3xl text-center mb-6"}>
          Soluções digitais <br/> resultados reais
        </h1>
        <Button buttonType="transparent" label="O que fazemos?" />
      </div>
    </header>
  )
}
