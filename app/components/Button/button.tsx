import Link from "next/link";

interface Button {
  label: string;
  buttonType: "transparent" | "solid";
}

const Button = (props: Button) => {
  return (
    <Link href="#about">
      <button data-format={props.buttonType}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 border-white/30 backdrop-blur p-3 border rounded-lg text-xs text-white">
        {props.label}
      </button>
    </Link>
  )
}

export default Button