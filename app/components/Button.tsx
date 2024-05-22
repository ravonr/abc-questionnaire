interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined
  disabled: boolean
  text: string
}

const Button = ({ type, disabled, text }: ButtonProps) => {
  return (
    <button
      className="font-andale bg-borderColor px-4 py-2 text-base font-normal uppercase leading-[22.4px] text-purple"
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
