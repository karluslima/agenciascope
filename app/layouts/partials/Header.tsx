import Button from "@/app/components/Button/button";
import NavBar from "@/app/components/Navbar/Navbar";

export default function Header()  {
  return (
    <header className="h-screen bg-cover bg-header-bg bg-fixed" id="welcome">
      <div className="bg-overlay bg-black/[.3] w-full h-screen absolute"></div>
      <NavBar />
      <h1 className="absolute text-6xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> Agência Full Commerce </h1>
      <Button buttonType="transparent" label="O que fazemos?" />
    </header>
  )
}
