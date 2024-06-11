import About from '@/app/components/About'
import AddTermForm from '@/app/components/AddTermForm'
import DrawTheInternet from '@/app/components/DrawTheInternet'
import Footer from '@/app/components/Footer'
import Hero from '@/app/components/Hero'
import Subscribe from '@/app/components/Subscribe'
import Terms from '@/app/components/Terms'

const Questionnaire = () => (
  <>
    <main className="flex bg-purple">
      <div className="py-4 lg:py-8" id="left">
        <Hero />
        <About />
        <AddTermForm />
        <DrawTheInternet />
        <Footer />
      </div>
      <div
        className="border border-b-0 border-r-0 border-t-0 border-solid border-borderColor bg-purple py-4 lg:py-8"
        id="right"
      >
        <Subscribe />
        <Terms />
      </div>
    </main>
  </>
)
export default Questionnaire
