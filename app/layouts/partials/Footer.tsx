import ContactForm from "@/app/components/Contact/ContactForm";
import Copyright from "@/app/components/Copyright/copyright";

export default function Footer() {
  return (
    <footer className="bg-black h-[320px]">
      <div className="contact-form flex flex-col justify-center items-center p-20 bg-[#15202b]">
        <span className="text-white text-3xl font-bold"> Vamos conversar? </span>
        <a className="text-white" href="mailto:falecom@agenciascope.com.br"> falecom@agenciascope.com.br</a>
      </div>
      {/* <ContactForm /> */}
      <Copyright />
    </footer>
  )
}