interface ParagraphProps {
  children: string
  className?: string
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={`${className} text-ink`}>{children}</p>
}

export default Paragraph
