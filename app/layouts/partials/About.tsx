import Titles from "@/app/components/Titles/Titles"

export default function About() {
  return (
    <section id="about" className="my-12">
      <div className="container mx-auto pb-4 text-center text-base">
        <Titles title={'Sobre a SCOPE'} />
        <p> Somos uma agência 100% digital. Desenvolvemos soluções digitais sob medida para impulsionar seus resultados.</p>
        <p className="max-w-screen-lg mx-auto text-base">Precisando de soluções digitais sob medida para impulsionar o seu negócio? Conte com a gente!
          Desenvolvemos sites, lojas virtuais e estratégias de marketing digital personalizadas para alcançar seus objetivos.
          Nosso foco é entregar resultados reais e duradouros, transformando sua presença online em um poderoso motor de crescimento</p>
      </div>
    </section>
  )
}