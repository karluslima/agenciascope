import { titillium } from "@/app/lib/fonts";

type SectionTitle = {
  title: string;
}
export default function Titles( props: SectionTitle ) {
  return (
    <h2 className={titillium.className +" section-title w-full text-center sm:w-auto inline-block py-3 text-4xl md:text-5xl"}>
      {props.title}
    </h2>
  )
}