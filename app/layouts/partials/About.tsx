import Titles from "@/app/components/Titles/Titles"

export default function About() {
  return (
    <section id="about" className="my-5 sm:my-12">
      <div className="container px-4 pb-4 md:mx-auto text-base grid grid-cols-1 md:grid-cols-2 min-h-[455px]">
        <div className="about-description self-center">
          <Titles title={'Sobre a SCOPE'} />
          <p> Precisando de soluções digitais sob medida para impulsionar o seu negócio?</p>
          <p className="max-w-screen-lg mx-auto text-base">
            Desenvolvemos soluções digitais sob medida para impulsionar seus resultados.
            Sites, lojas virtuais e estratégias de marketing digital personalizadas para alcançar seus objetivos.
            Nosso foco é entregar resultados reais e duradouros, transformando sua presença online em um poderoso motor de crescimento</p>
        </div>
        <div className="about-image bg-about-bg bg-contain bg-no-repeat bg-center md:bg-right min-h-96"></div>
      </div>
    </section>
  )
}