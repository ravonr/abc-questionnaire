import Paragraph from './Paragraph'
import { data } from './fake-data.js'

const Terms = () => {
  return (
    <div className="pl-8 pt-8">
      <div className="border-borderColor grid grid-cols-5 border border-l-0 border-r-0 border-t-0 border-solid pb-8">
        <Paragraph>TERM</Paragraph>
        <div className="col-span-2">
          <Paragraph>CONDITION</Paragraph>
        </div>
        <Paragraph>CONTRIBUTOR</Paragraph>
        <Paragraph>TIMESTAMP</Paragraph>
      </div>

      <div className="">
        {data.map((term) => {
          return (
            <div className="grid grid-cols-5 py-8">
              <Paragraph>{term.term}</Paragraph>
              <div className="col-span-2 max-w-[332px]">
                <Paragraph>{term.condition}</Paragraph>
              </div>
              <Paragraph>{term.contributor}</Paragraph>
              <Paragraph>{term.timestamp}</Paragraph>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Terms
