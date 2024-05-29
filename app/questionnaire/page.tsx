import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'
import About from '../components/About'
import Terms from '../components/Terms'
import AddTermForm from '../components/AddTermForm'
import DrawTheInternet from '../components/DrawTheInternet'

export default function Home() {
  return (
    <main className="flex bg-purple p-8">
      <div className="max-w-[33%]">
        <Hero />
        <About />
        <AddTermForm />
        <DrawTheInternet />
      </div>
      <div className="min-w-[66%] border border-b-0 border-r-0 border-t-0 border-solid border-borderColor">
        <Subscribe />
        <Terms />
      </div>
    </main>
  )
}
