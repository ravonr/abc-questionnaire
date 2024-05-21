import Paragraph from './Paragraph'

interface TermProps {
  term: {
    term: string
    condition: string
    contributor: string
    created_at: string
  }
}

const Term = ({ term }: TermProps) => {
  const { condition, contributor, created_at } = term
  return (
    <div className="grid grid-cols-5 border border-l-0 border-r-0 border-t-0 border-solid border-borderColor py-[20px]">
      <Paragraph>{term.term}</Paragraph>
      <div className="col-span-2 max-w-[332px]">
        <Paragraph>{condition}</Paragraph>
      </div>
      <Paragraph>{contributor}</Paragraph>
      <Paragraph className="text-right">{created_at}</Paragraph>
    </div>
  )
}

export default Term
