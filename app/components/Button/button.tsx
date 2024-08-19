import Link from "next/link";

interface Button {
  label: string;
  buttonType: "transparent" | "solid";
}

const solidStyles = "p-3 border rounded-lg text-xs text-white"
const transparentStyles = "border-white/30 backdrop-blur p-3 border rounded-lg text-xs text-white"

const Button = (props: Button) => {
  return (
    <Link href="#about">
      <button data-format={props.buttonType}
        className={props.buttonType == 'solid' ? solidStyles : transparentStyles + " m-auto"}>
        {props.label}
      </button>
    </Link>
  )
}

export default Button