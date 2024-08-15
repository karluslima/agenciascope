interface Button {
  label: string;
  buttonType: "transparent" | "solid";
}

const Button = (props: Button) => {
  return (
    <button data-format={props.buttonType} className="absolute">
      {props.label}
    </button>
  )
}

export default Button