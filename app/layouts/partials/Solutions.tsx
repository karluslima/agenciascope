import Titles from '@/app/components/Titles/Titles';
import solutions from '@/app/lib/solutions.json';
import solutionsBackground from '@/public/solutions-bg.jpg';
import Image from 'next/image';


type solutions = {
  id: number;
  label: string;
  class: string;
  icon:string;
  description:string;
}

export default function Solutions() {
  return (
    <section id="solutions" className="bg-slate-50 py-16">
      {/* <Image alt="Soluções" src={solutionsBackground} placeholder="blur" quality={100} fill sizes="100vw"
      style={{ objectFit: 'cover', }} /> */}
      <div className="container px-4 pb-4 md:mx-auto">
        <Titles title='Nossos Serviços' />
        <div className="solutions grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
          {solutions.map((solutions) => {
            return (
              <div key={solutions.id} className={solutions.class +" flex flex-col sm:flex-row"}>
                <div className="icon w-32 m-auto">
                  <Image src={"icons/"+solutions.icon} width={100} height={100} alt={solutions.label} />
                </div>

                <div className="flex flex-col w-full sm:w-2/3">
                  <div className='text-[#000000] text-base font-semibold'> {solutions.label} </div>
                  <div className="description font-light text-sm leading-7"> {solutions.description} </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )

}