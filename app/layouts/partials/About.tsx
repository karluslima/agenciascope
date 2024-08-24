import Titles from "@/app/components/Titles/Titles"

export default function About() {
  return (
    <section id="about" className="my-5 sm:my-12">
      <div className="container px-4 pb-4 md:mx-auto text-base flex flex-col min-h-[455px]">
        <div className="about-description max-w-screen-sm m-auto text-center pb-20">
          <Titles title={'Sobre a SCOPE'} />
          <p className="mx-auto text-base font-light leading-7">
          Somos uma agência digital especializada em soluções personalizadas para impulsionar o seu negócio online.
          Com estratégias criativas e resultados mensuráveis, entregamos tudo o que você precisa para alcançar o sucesso digital.</p>
        </div>
        <div className="about-image bg-about-bg bg-contain bg-no-repeat bg-center min-h-[420px]"></div>
      </div>
    </section>
  )
}