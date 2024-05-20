import Paragraph from './Paragraph'

const Subscribe = () => {
  return (
    <div className="border-borderColor flex justify-between border border-l-0  border-r-0 border-solid pb-6 pl-8 pt-6">
      <h2>Subscribe to New Terms & Conditions</h2>

      <div>
        <form
          action=""
          className="borer-solid border-borderColor bg-transparent flex justify-between border"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="bg-transparent border-none"
          />
          <button
            className="bg-borderColor px-4 py-2 text-purple"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        <Paragraph>
          a bi-weekly glossary entry, manifesto, and poetic utterance
        </Paragraph>
      </div>
    </div>
  )
}

export default Subscribe
