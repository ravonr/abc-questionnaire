import Hero from './components/Hero'
import Subscribe from './components/Subscribe'
import About from './components/About'
import Terms from './components/Terms'

export default function Home() {
  return (
    <main className="flex">
      <div className="max-w-[33%]">
        <Hero />
        <About />
      </div>
      <div className="min-w-[66%]">
        <Subscribe />
        <Terms />
      </div>
    </main>
  )
}
