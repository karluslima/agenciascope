type SectionTitle = {
  title: string;
}
export default function Titles( props: SectionTitle ) {
  return (
    <h2 className="section-title about-title w-full text-center sm:w-auto font-bold inline-block py-3 text-4xl md:text-5xl">
      {props.title}
    </h2>
  )
}