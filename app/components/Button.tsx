interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined
  disabled: boolean
  text: string
  className?: string
}

const Button = ({ type, disabled, text, className }: ButtonProps) => {
  return (
    <button
      className={`${className} bg-borderColor px-4 py-2 font-andale text-base font-normal uppercase leading-[22.4px] text-purple`}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
