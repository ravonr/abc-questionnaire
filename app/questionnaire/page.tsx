import About from '../components/About'
import AddTermForm from '../components/AddTermForm'
import DrawTheInternet from '../components/DrawTheInternet'
import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'
import Terms from '../components/Terms'

const Questionnaire = () => (
  <main className="flex bg-purple py-4 lg:py-8">
    <div className="max-w-[45%] lg:max-w-[33%]">
      <Hero />
      <About />
      <AddTermForm />
      <DrawTheInternet />
    </div>
    <div className="min-w-[430px] border border-b-0 border-r-0 border-t-0 border-solid border-borderColor bg-purple lg:min-w-[66%]">
      <Subscribe />
      <Terms />
    </div>
  </main>
)
export default Questionnaire
