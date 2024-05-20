import Button from './Button'
import Paragraph from './Paragraph'

const Subscribe = () => {
  return (
    <div className="flex border border-l-0 border-r-0 border-solid border-borderColor pb-6 pl-8 pt-6">
      <h2 className="mr-[41px] max-w-[210px]">
        Subscribe to New Terms & Conditions
      </h2>

      <div className="w-full">
        <form
          action=""
          className="borer-solid bg-transparent flex justify-between border border-borderColor p-3"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="bg-transparent w-full border-none text-ink placeholder:text-ink"
            placeholder="Your email address"
          />
          <Button />
        </form>
        <Paragraph className="mt-4">
          a bi-weekly glossary entry, manifesto, and poetic utterance
        </Paragraph>
      </div>
    </div>
  )
}

export default Subscribe
