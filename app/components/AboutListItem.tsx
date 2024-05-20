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
      <Paragraph>{text}</Paragraph>
    </li>
  )
}

export default AboutListItem
