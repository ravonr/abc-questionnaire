import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="font-lack flex h-[50vh] flex-col items-center justify-center gap-2">
      <h1 className="font-lack ">young and nauseous and not found </h1>
      <Link className="button-red text-center" href="/">
        return home
      </Link>
    </div>
  )
}
export default NotFound
