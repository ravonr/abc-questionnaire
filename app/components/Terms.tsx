import Paragraph from './Paragraph'
import Term from './Term'
import { data } from './fake-data.js'

const Terms = () => {
  return (
    <div className="pl-8 ">
      <div className="grid grid-cols-5 border border-l-0 border-r-0 border-t-0 border-solid border-borderColor py-[20px]">
        <Paragraph>TERM</Paragraph>
        <div className="col-span-2">
          <Paragraph>CONDITION</Paragraph>
        </div>
        <Paragraph>CONTRIBUTOR</Paragraph>
        <Paragraph className="text-right">TIMESTAMP</Paragraph>
      </div>

      <div className="">
        {data.map((term) => {
          return <Term term={term} key={term.term} />
        })}
      </div>
    </div>
  )
}

export default Terms
