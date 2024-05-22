import Button from './Button'
import Paragraph from './Paragraph'

const Subscribe = () => {
  return (
    <div className="flex border border-l-0 border-r-0 border-solid border-borderColor pb-6 pl-8 pt-6">
      <h2 className="mr-[41px] max-w-[210px]">
        Subscribe to New Terms & Conditions
      </h2>

      <div className="w-full">
        <form className="borer-solid flex justify-between border border-borderColor bg-transparent p-3">
          <input
            type="email"
            name="email"
            id="email"
            className="placeholder:font-andale font-andale w-full border-none bg-transparent text-base font-normal leading-[22.4px] text-borderColor placeholder:text-borderColor"
            placeholder="Your email address"
          />
          <Button type="submit" disabled={false} text="submit"></Button>
        </form>
        <p className="font-andale mt-4 text-sm font-normal leading-[16.8px] text-borderColor">
          a bi-weekly glossary entry, manifesto, and poetic utterance
        </p>
      </div>
    </div>
  )
}

export default Subscribe
