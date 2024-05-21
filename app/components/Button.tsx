interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined
  disabled: boolean
  text: string
}

const Button = ({ type, disabled, text }: ButtonProps) => {
  return (
    <button
      className="bg-borderColor px-4 py-2 uppercase text-purple"
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
