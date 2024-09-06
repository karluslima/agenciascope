import ContactForm from "@/app/components/Contact/ContactForm";
import Copyright from "@/app/components/Copyright/copyright";

export default function Footer() {
  return (
    <footer className="bg-black h-[320px]">
      <ContactForm />
      <Copyright />
    </footer>
  )
}