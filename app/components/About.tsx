import AboutListItem from './AboutListItem'
import Icon from './Icon'

const About = () => {
  return (
    <div className="border border-b-0 border-l-0 border-r-0 border-solid border-borderColor py-6 pr-8">
      <h3 className="mb-6">
        Begin a practice of refusal & repair
        <Icon type="pixel-heart" className="ml-2"></Icon>
      </h3>

      <ul>
        <AboutListItem
          icon="pen"
          text="Draw a diagram. illustrate how you are connected to the internet— are you wireless by way of wifi or hardwired by way of an ethernet cord? who else is connected to the same source?"
        />
        <br />

        <AboutListItem
          icon="christmas"
          text="Locate the internet in your community. go outside"
        />
        <br />

        <AboutListItem
          icon="butterfly"
          text="our world is made up of clouds, bugs, gardens, and farms. how are you tending to them online? how are you tending to them offline?"
        />
        <br />

        <AboutListItem
          icon="cloud"
          text="Imagine.knowing that the internet is cables traveling across the see floor and across the sky what does the internet look like"
        />
        <br />

        <AboutListItem
          icon="web"
          text="how do you want to web together, inclusive of our bodies and the land that lives with data? what is the status of your connection?"
        ></AboutListItem>
        <br />

        <AboutListItem
          icon="book"
          text="Collect found words or phrases that you use to think or talk about the internet, the web, and technology. are there new terms and conditions you can dream of. what are the ways you want to be connected to technology, your community, and/or the natural world around you? what are the conditions that will help us create this world together?"
        ></AboutListItem>
      </ul>
    </div>
  )
}

export default About
