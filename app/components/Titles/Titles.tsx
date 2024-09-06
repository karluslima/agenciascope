import { titillium } from "@/app/lib/fonts";

interface SectionTitleProps {
  title: string;
}

const Titles = ({ title }: SectionTitleProps) => {
  return (
    <h2
      className={`${titillium.className} section-title w-full text-center sm:w-auto inline-block py-3 text-4xl md:text-5xl`}
    >
      {title}
    </h2>
  );
};

export default Titles;
