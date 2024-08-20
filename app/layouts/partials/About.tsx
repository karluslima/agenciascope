import Titles from "@/app/components/Titles/Titles"

export default function About() {
  return (
    <section id="about" className="my-5 sm:my-12">
      <div className="container px-4 pb-4 md:mx-auto text-base grid grid-cols-1 md:grid-cols-2 min-h-[455px]">
        <div className="about-description self-center">
          <Titles title={'Sobre a SCOPE'} />
          <p className="mx-auto text-base">
          Somos uma agência digital especializada em soluções personalizadas para impulsionar o seu negócio online.
          Com estratégias criativas e resultados mensuráveis, entregamos tudo o que você precisa para alcançar o sucesso digital.</p>
        </div>
        <div className="about-image bg-about-bg bg-contain bg-no-repeat bg-center md:bg-right min-h-96"></div>
      </div>
    </section>
  )
}