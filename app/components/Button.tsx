interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined
  disabled: boolean
  text: string
  className?: string
  onClick: () => void
}

const Button = ({ type, disabled, text, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`${className} bg-borderColor px-4 py-2 font-andale text-base font-normal uppercase leading-[22.4px] text-purple`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
