import Button from './Button'
import Paragraph from './Paragraph'

const Subscribe = () => {
  return (
    <div className="flex border border-l-0 border-r-0 border-solid border-borderColor px-8 pb-6 pt-6">
      <h2 className="mr-[41px] max-w-[210px] leading-none">
        <span className="font-mondwest text-[12px] lg:text-[34px]">S</span>
        <span className="font-editorial text-[20px] lg:text-[27px]">ubs</span>
        <span className="font-mondwest text-[12px] lg:text-[34px]">c</span>
        <span className="font-editorial text-[20px] lg:text-[27px]">rib</span>
        <span className="font-mondwest text-[12px] lg:text-[34px]">e</span>{' '}
        <span className="font-editorial text-[20px] lg:text-[27px]">t</span>
        <span className="font-mondwest text-[12px] lg:text-[34px]">o</span>{' '}
        <span className="font-editorial text-[20px] lg:text-[27px]">N</span>
        <span className="font-mondwest text-[12px] lg:text-[34px]">e</span>
        <span className="font-mondwest text-[12px] lg:text-[34px]">w</span>{' '}
        <span className="font-mondwest text-[12px] lg:text-[34px]">
          Terms &
        </span>{' '}
        <span className="font-mondwest text-[12px] lg:text-[34px]">
          Conditions
        </span>
      </h2>

      <div className="w-full">
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/{newtermsandconditions}"
          method="post"
          target="popupwindow"
          className="embeddable-buttondown-form"
        >
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="you@example.com" />
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
          <p>
            <a href="https://buttondown.email" target="_blank">
              Powered by Buttondown.
            </a>
          </p>
        </form>
        <form className="borer-solid flex justify-between border border-borderColor bg-transparent p-3">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border-none bg-transparent font-andale text-base font-normal leading-[22.4px] text-borderColor placeholder:font-andale placeholder:text-borderColor"
            placeholder="Your email address"
          />
          <Button type="submit" disabled={false} text="submit"></Button>
        </form>
        <p className="mt-4 font-andale text-sm font-normal leading-[16.8px] text-borderColor">
          a bi-weekly glossary entry, manifesto, and poetic utterance
        </p>
      </div>
    </div>
  )
}

export default Subscribe
