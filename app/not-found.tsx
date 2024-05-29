import Link from 'next/link'
import Icon from './components/Icon'

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-purple">
      <h1 className="text-ink">page not found </h1>
      <div className="flex items-center justify-center gap-2">
        <Icon type="pixel-heart" />
        <Icon type="pixel" />
        <Icon type="butterfly" />
        <Icon type="pixel" />
        <Icon type="pixel-heart" />
      </div>

      <Link className="button-red text-center" href="/">
        return home
      </Link>
    </div>
  )
}
export default NotFound
