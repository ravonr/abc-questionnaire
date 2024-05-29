import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-ink p-[54px]">
      <nav>
        <ul className="flex justify-between lg:justify-end lg:gap-[107px]">
          <li className="text-[12px] font-normal leading-[10px] text-purple">
            <Link href="/questionnaire">Contribute</Link>
          </li>
          <li className="text-[12px] font-normal leading-[10px] text-purple">
            <Link
              href="buttondown.email/newtermsandconditions"
              passHref
              legacyBehavior
            >
              <a target="_blank">Newsletter</a>
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-center text-purple lg:text-left">
        <span className=" font-mondwest text-[60px] lg:text-[80px]">A</span>
        <span className="font-editorial text-[48px] lg:text-[64px]">B</span>
        <span className="font-mondwest text-[60px] lg:text-[80px]">C</span>{' '}
        <span className="font-mondwest text-[60px] lg:text-[80px]">G</span>
        <span className="font-editorial text-[48px] lg:text-[64px]">lo</span>
        <span className="font-mondwest text-[60px] lg:text-[80px]">ss</span>
        <span className="font-editorial text-[48px] lg:text-[64px]">ary</span>
      </h1>
      <p className="text-center text-[32px] font-normal italic leading-6 text-purple lg:max-w-[344px] lg:text-left">
        a glossary for an&nbsp;
        <span className="font-bold">a</span>nti-colonial{' '}
        <span className="font-bold">B</span>lack feminist{' '}
        <span className="font-bold">c</span>ritical media ecology
      </p>
    </main>
  )
}
