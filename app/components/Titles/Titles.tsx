type SectionTitle = {
  title: string,
  alignment?: 'center' | 'left' | 'right';
}
export default function Titles( props: SectionTitle ) {
  return (
    <h2 className="section-title font-bold inline-block py-3 text-4xl md:text-7xl"> {props.title} </h2>
  )
}