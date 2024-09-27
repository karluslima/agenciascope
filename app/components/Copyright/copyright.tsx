import { titillium } from "@/app/lib/fonts";

export default function Copyright() {
  const year = new Date().getFullYear();
  return (
    <div className="copyright bg-[#15202b]">
      <div className={`container m-auto text-white border-t-[1px] border-slate-700 py-10 text-center ${titillium.className}`}>
        © {year} Todos os direitos reservados.
      </div>
    </div>
  );
}
