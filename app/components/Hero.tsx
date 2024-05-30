import Icon from './Icon'

const Hero = () => {
  return (
    <div className="border border-b-0 border-l-0 border-r-0 border-solid border-borderColor py-[12px] pb-4 pl-[10px] lg:py-6 lg:pl-8 lg:pr-6">
      <div className="flex items-center">
        <Icon className="mr-1 lg:mr-3" type="pixel"></Icon>
        <h1 className="break-all leading-none text-headlineColor">
          <span className="font-mondwest text-[24px] lg:text-[80px]">A</span>
          <span className="font-editorial text-[19px] lg:text-[64px]">B</span>
          <span className="font-mondwest text-[24px] lg:text-[80px]">
            C
          </span>{' '}
          <span className="font-mondwest text-[24px] lg:text-[80px]">G</span>
          <span className="font-editorial text-[19px] lg:text-[64px]">lo</span>
          <span className="font-mondwest text-[24px] lg:text-[80px]">ss</span>
          <span className="font-editorial text-[19px] lg:text-[64px]">ary</span>
        </h1>
      </div>
      <h2 className="mb-6 leading-[0.5] text-headlineColor">
        <span className="font-mondwest text-[24px] lg:text-[80px]">Q</span>
        <span className="font-editorial text-[19px] lg:text-[64px]">uesti</span>
        <span className="font-mondwest text-[24px] lg:text-[80px]">onn</span>
        <span className="font-editorial text-[19px] lg:text-[64px]">aire</span>
      </h2>
      <p className="font-montreal text-sm font-normal leading-[18.2px] text-ink">
        Use these exercises to revisit your relationship to the internet and the
        web through language. What words do we use? What words do we ignore?
        What words do we need to use in new ways? Afterwards submit your
        reimagined term and its new definition.
      </p>
      <br />
      <p className="font-montreal text-sm leading-[18.2px] text-ink ">
        This questionnaire is part of a framework and glossary for an
        anti-colonial Black feminist critical media ecology, or abc glossary for
        short, a growing reimagining of computing-related terminology from
        hardware to software beyond the conditions of e-colonialism — toward
        abundant relationship between humans, technology, and nature.
      </p>
    </div>
  )
}

export default Hero
