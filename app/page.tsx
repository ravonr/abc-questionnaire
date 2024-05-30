import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-ink p-[54px]">
      <nav>
        <ul className="flex justify-between lg:justify-end lg:gap-[107px]">
          <li className="text-[12px] font-normal leading-[10px] text-purple">
            <Link className="hover:underline" href="/questionnaire">
              Contribute
            </Link>
          </li>
          <li className="text-[12px] font-normal leading-[10px] text-purple">
            <Link
              href="https://buttondown.email/newtermsandconditions"
              passHref={true}
              target="_blank"
              className="hover:underline"
            >
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="mt-4 text-purple lg:mt-0">
        <span className=" font-mondwest text-[42px] lg:text-[80px]">A</span>
        <span className="font-editorial text-[34px] lg:text-[64px]">B</span>
        <span className="font-mondwest text-[42px] lg:text-[80px]">C</span>{' '}
        <span className="font-mondwest text-[42px] lg:text-[80px]">G</span>
        <span className="font-editorial text-[34px] lg:text-[64px]">lo</span>
        <span className="font-mondwest text-[42px] lg:text-[80px]">ss</span>
        <span className="font-editorial text-[34px] lg:text-[64px]">ary</span>
      </h1>
      <p className="text-[32px] font-normal italic leading-none text-purple lg:max-w-[344px]">
        a glossary for an&nbsp;
        <span className="font-bold">a</span>nti-colonial{' '}
        <span className="font-bold">B</span>lack feminist{' '}
        <span className="font-bold">c</span>ritical media ecology
      </p>
    </main>
  )
}
