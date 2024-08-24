import { oswald } from "@/app/lib/fonts";

export default function MidCall() {
  return (
    <section id="midcall" className="relative flex items-center h-12 h-40 sm:h-96">
      <h2 className={ oswald.className + " z-20 m-auto text-center text-white text-3xl z-30 font-bold"}>
        Soluções digitais sob medida. Resultados que fazem a diferença. <br/>
        <small className="font-normal">A agência digital que entende o <span className="midhighlight">seu negócio.</span></small>
      </h2>
      <div className="overlay bg-black opacity-50 w-full h-40 sm:h-96 absolute z-20"></div>
      <div className="bg-midcall-bg w-full h-40 sm:h-96 bg-fixed top-0 z-0 absolute"></div>
    </section>
  )
}