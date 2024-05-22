import Icon from './Icon'
import Paragraph from './Paragraph'

interface AboutListItemProps {
  icon: string
  text: string
}

const AboutListItem = ({ icon, text }: AboutListItemProps) => {
  return (
    <li className="flex">
      <div className="mr-6">
        <Icon type={icon}></Icon>
      </div>
      <p className="font-montreal text-sm font-normal text-ink">{text}</p>
    </li>
  )
}

export default AboutListItem
