import Button from './Button'

const Subscribe = () => {
  return (
    <div className="flex min-w-[600px] flex-col bg-purple px-[10px] py-[12px] lg:min-w-0 lg:flex-row lg:px-8 lg:pb-6 lg:pt-6">
      <h2 className="mb-2 max-w-[120px] leading-none lg:mb-2 lg:mr-[41px] lg:max-w-[210px]">
        <span className="font-mondwest text-[20px] lg:text-[34px]">S</span>
        <span className="font-editorial text-[15px] lg:text-[27px]">ubs</span>
        <span className="font-mondwest text-[20px] lg:text-[34px]">c</span>
        <span className="font-editorial text-[15px] lg:text-[27px]">rib</span>
        <span className="font-mondwest text-[20px] lg:text-[34px]">e</span>{' '}
        <span className="font-editorial text-[15px] lg:text-[27px]">t</span>
        <span className="font-mondwest text-[20px] lg:text-[34px]">o</span>{' '}
        <span className="font-editorial text-[15px] lg:text-[27px]">N</span>
        <span className="font-mondwest text-[20px] lg:text-[34px]">e</span>
        <span className="font-mondwest text-[20px] lg:text-[34px]">w</span>{' '}
        <span className="font-mondwest text-[20px] lg:text-[34px]">
          Terms &
        </span>{' '}
        <span className="font-mondwest text-[20px] lg:text-[34px]">
          Conditions
        </span>
      </h2>

      <div className="w-full">
        <form
          className="borer-solid flex justify-between border border-borderColor bg-transparent p-3"
          action="https://buttondown.email/api/emails/embed-subscribe/newtermsandconditions"
          method="post"
          target="popupwindow"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="w-full rounded-none border-none bg-transparent font-andale text-sm font-normal leading-[22.4px] text-borderColor placeholder:font-andale placeholder:text-borderColor lg:mr-6 lg:text-base"
            placeholder="Your email address"
          />
          <Button
            className={'hidden lg:block'}
            type="submit"
            disabled={false}
            text="submit"
          ></Button>
        </form>
        <Button
          className={'mt-2 block lg:hidden'}
          type="submit"
          disabled={false}
          text="submit"
        ></Button>
        <p className="mt-2 font-andale text-sm font-normal leading-[16.8px] text-borderColor lg:mt-4">
          a bi-weekly glossary entry, manifesto, and poetic utterance
        </p>
      </div>
    </div>
  )
}

export default Subscribe
