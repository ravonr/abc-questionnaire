import Icon from './Icon'

const Hero = () => {
  return (
    <div className="pb-[12px] pl-[10px] pr-[4px] lg:pb-6 lg:pl-8 lg:pr-6">
      <div className="flex items-center">
        <Icon
          className="lg: mr-1 h-[10px] w-[10px] lg:mr-3 lg:h-auto lg:w-auto"
          type="pixel"
        ></Icon>
        <h1 className="mb-1 break-all leading-none text-headlineColor lg:mb-0">
          <span className="font-mondwest text-[18px] lg:text-[72px]">A</span>
          <span className="font-editorial text-[14px] lg:text-[58px]">B</span>
          <span className="font-mondwest text-[18px] lg:text-[72px]">
            C
          </span>{' '}
          <span className="font-mondwest text-[18px] lg:text-[72px]">G</span>
          <span className="font-editorial text-[14px] lg:text-[58px]">lo</span>
          <span className="font-mondwest text-[18px] lg:text-[72px]">ss</span>
          <span className="font-editorial text-[14px] lg:text-[58px]">ary</span>
        </h1>
      </div>
      <h2 className="mb-[10px] leading-[0.5] text-headlineColor lg:mb-6">
        <span className="font-mondwest text-[18px] lg:text-[72px]">Q</span>
        <span className="font-editorial text-[14px] lg:text-[58px]">uesti</span>
        <span className="font-mondwest text-[18px] lg:text-[72px]">onn</span>
        <span className="font-editorial text-[14px] lg:text-[58px]">aire</span>
      </h2>
      <p className="font-montreal text-sm font-normal leading-[18.2px] text-ink">
        Welcome to the ABC Glossary* Questionnaire, an invitation to revisit
        your relationship to the internet and to reimagine how we collectively
        web through language.
      </p>
      <br />
      <p className="font-montreal text-sm leading-[18.2px] text-ink">
        Below are a set of exercises to help you locate yourself within a (local
        area) network in order to refuse harmful computing practices and to
        repair our connections with/between technology, community, and nature.
      </p>
      <br />
      <p className="font-montreal text-sm italic leading-[18.2px] text-ink">
        <em>What words do we use to describe our electronic experiences?</em>
      </p>
      <p className="font-montreal text-sm italic leading-[18.2px] text-ink">
        <em>What terms do you associate with the internet, computing, and cyber
        culture?</em>
      </p>
      <p className="font-montreal text-sm italic leading-[18.2px] text-ink">
        <em>What words do we ignore?</em>
      </p>
      <p className="font-montreal text-sm italic leading-[18.2px] text-ink">
        <em>What words do we need to use in new ways?</em>
      </p>
      <br />
      <p className="font-montreal text-sm font-normal leading-[18.2px] text-ink">
        Submit a term with a newly redefined condition.* Draw an imagined map of
        the internet.
      </p>
    </div>
  )
}

export default Hero
