import Link from 'next/link'

const BackLink = () => {
  return (
    <Link href="/">
      <p className="absolute left-[10px] top-0 text-ink lg:left-6 lg:top-6 lg:text-[24px]">
        &larr;
      </p>
    </Link>
  )
}

export default BackLink
