import Link from 'next/link'

const Home = () => (
  <main className="min-h-screen bg-ink p-[54px]">
    <nav>
      <ul className="flex justify-between lg:justify-end lg:gap-[107px]">
        <li className="font-montreal  font-normal leading-[10px] text-purple lg:text-[24px]">
          <Link className="hover:underline" href="/questionnaire">
            Contribute
          </Link>
        </li>
        <li className="font-montreal font-normal leading-[10px] text-purple lg:text-[24px]">
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
      <span className="font-mondwest text-[50px] lg:text-[156px]">A</span>
      <span className="font-editorial text-[41px] lg:text-[125px]">B</span>
      <span className="font-mondwest text-[50px] lg:text-[156px]">C</span>
      <span className="font-mondwest text-[50px] lg:text-[156px]">&nbsp;</span>

      <span className="font-mondwest text-[50px] lg:text-[156px]">G</span>
      <span className="font-editorial text-[41px] lg:text-[125px]">lo</span>
      <span className="font-mondwest text-[50px] lg:text-[156px]">ss</span>
      <span className="font-editorial text-[41px] lg:text-[125px]">ary</span>
    </h1>
    <p className="font-montreal text-[28px] font-normal italic leading-none text-purple lg:max-w-[900px] lg:text-[64px]">
      a glossary for an&nbsp;
      <span className="font-bold">a</span>nti-colonial{' '}
      <span className="font-bold">B</span>lack feminist{' '}
      <span className="font-bold">c</span>ritical media ecology
    </p>
  </main>
)
export default Home
