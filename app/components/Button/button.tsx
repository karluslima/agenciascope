import Link from "next/link";

interface ButtonProps {
  label: string;
  buttonType: "transparent" | "solid";
}

const buttonStyles = {
  solid: "p-3 border rounded-lg text-xs text-white",
  transparent: "border-white/30 backdrop-blur p-3 border rounded-lg text-base text-white m-auto",
};

const Button = ({ label, buttonType }: ButtonProps) => {
  return (
    <Link href="#about">
      <button
        data-format={buttonType}
        className={buttonStyles[buttonType]}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
