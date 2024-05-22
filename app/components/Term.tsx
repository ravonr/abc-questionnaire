import Paragraph from './Paragraph'

interface TermProps {
  term: {
    term: string
    condition: string
    contributor: string
    created_at: string
  }
}

const convertDateFormat = (dateString: string) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`

  return formattedDate
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
      <Paragraph className="text-right">
        {convertDateFormat(created_at)}
      </Paragraph>
    </div>
  )
}

export default Term
