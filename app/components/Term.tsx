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
    <div className="grid grid-cols-5 gap-8 border border-l-0 border-r-0 border-t-0 border-solid border-borderColor bg-purple p-[10px] lg:gap-0 lg:px-8 lg:py-[20px]">
      <p className="font-andale text-xs font-normal leading-[13.5px] text-ink">
        {term.term}
      </p>
      <div className="col-span-2 max-w-[332px]">
        <p className="font-andale text-xs font-normal leading-[13.5px] text-ink">
          {condition}
        </p>
      </div>
      <p className="font-andale text-xs font-normal leading-[13.5px] text-ink">
        {contributor}
      </p>
      <p className="text-right font-andale text-xs font-normal leading-[13.5px] text-ink">
        {convertDateFormat(created_at)}
      </p>
    </div>
  )
}

export default Term
