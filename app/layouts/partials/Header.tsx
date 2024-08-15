import Button from "@/app/components/Button/button";
import NavBar from "@/app/components/Navbar/Navbar";

export default function Header()  {
  return (
    <header className="h-screen bg-cover bg-header-bg bg-fixed" id="welcome">
      <div className="bg-overlay bg-black/[.3] w-full h-screen absolute"></div>
      <NavBar />
      <Button buttonType="transparent" label="O que fazemos?" />
    </header>
  )
}
