import AboutListItem from './AboutListItem'
import Icon from './Icon'

const About = () => {
  return (
    <div className="border border-b-0 border-l-0 border-r-0 border-solid border-borderColor py-[12px] pl-[10px] pr-[4px] lg:py-6 lg:pl-8 lg:pr-6">
      <h3 className="text mb-6 max-w-[320px] items-center justify-center leading-none text-headlineColor">
        <span className="font-mondwest text-[14px] lg:text-[48px]">B</span>
        <span className="font-editorial text-[12px] lg:text-[39px]">eg</span>
        <span className="font-mondwest text-[14px] lg:text-[48px]">
          in
        </span>{' '}
        <span className="font-mondwest text-[14px] lg:text-[48px]">a</span>{' '}
        <span className="font-editorial text-[12px] lg:text-[39px]">pr</span>
        <span className="font-mondwest text-[14px] lg:text-[48px]">ac</span>
        <span className="font-editorial text-[12px] lg:text-[39px]">ti</span>
        <span className="font-mondwest text-[14px] lg:text-[48px]">
          ce
        </span>{' '}
        <span className="font-editorial text-[12px] lg:text-[39px]">of</span>{' '}
        <span className="font-mondwest text-[14px] lg:text-[48px]">re</span>
        <span className="font-editorial text-[12px] lg:text-[39px]">
          fusal
        </span>{' '}
        <span className="font-mondwest text-[14px] lg:text-[48px]">&</span>
        <span className="font-editorial text-[12px] lg:text-[39px]">r</span>
        <span className="font-mondwest text-[14px] lg:text-[48px]">ep</span>
        <span className="font-editorial text-[12px] lg:text-[39px]">air</span>
        <div className="inline-flex">
          <Icon
            type="pixel-heart"
            className="ml-2 h-[10px] w-[10px] lg:h-auto lg:w-auto"
          ></Icon>
        </div>
      </h3>

      <ul>
        <AboutListItem
          icon="pen"
          text="Map your local area network (LAN). We are all part of a local area network (A local area network (LAN) is a collection of devices (e.g. your cell phone, laptop, desktop, printer) connected together in one physical location (e.g. in a building, office, or your home). A LAN is made up of cables, access points, switches, routers, and other components that enable devices to connect to internal servers, web servers, and other LANs via wide area networks.). Who are you connected with and how? Are you wireless by way of wifi or hardwired by way of an ethernet cord?"
        />

        <AboutListItem
          icon="christmas"
          text="Locate your server. We’re all archiving our data on a server. Where are you storing your memory? Look up the server for your personal website or for your photos on your phone. "
        />

        <AboutListItem
          icon="butterfly"
          text="Go for an internet walk. Where can you see the internet in your neighborhood or local area (e.g. cables, symbols)? what kind of infrastructure do you want to hold your community? if your community was an internet garden, what do you imagine it would look like?"
        />

        <AboutListItem
          icon="cloud"
          text="Study your network. Our world is made up of (data) clouds, (software) bugs, (internet) gardens, and (server) farms. how are you tending to them online? how are you tending to them offline? What is the status of your connection?"
        />

        <AboutListItem
          icon="web"
          text="Create a short manifesto. Develop a vision, guiding principles, and values for an anti-colonial Black feminist critical media ecology, a liberatory vision for our current and future of technology and cyber experience. How do you want to web together? How is your vision inclusive of our bodies and the land that resources our connections and lives with our data?"
        />

        <AboutListItem
          icon="book"
          text="Imagine new “terms & conditions”. With each device, website, and application you agree to a set of terms & conditions predetermined by someone else for how you connect. Collect words or phrases that you use to think or talk about the internet, the web, and technology. Are there new terms and conditions for these terms you can dream of? What are the ways you want to be connected to technology, your community, and/or the natural world around you? What are the conditions that will help us create this world together? "
        />
      </ul>
    </div>
  )
}

export default About
