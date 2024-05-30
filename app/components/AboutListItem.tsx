import Icon from './Icon'
import Paragraph from './Paragraph'

interface AboutListItemProps {
  icon: string
  text: string
}

const AboutListItem = ({ icon, text }: AboutListItemProps) => {
  return (
    <li className="flex">
      <div className="mr-[10px] lg:mr-6">
        <Icon
          className="h-[16px] w-[16px] lg:h-auto lg:w-auto"
          type={icon}
        ></Icon>
      </div>
      <p className="font-montreal text-sm font-normal text-ink">{text}</p>
    </li>
  )
}

export default AboutListItem
