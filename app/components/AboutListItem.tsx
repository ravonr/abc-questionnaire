import Icon from './Icon'
import Paragraph from './Paragraph'

interface AboutListItemProps {
  icon: string
  text: string
  boldText?: string
}

const AboutListItem = ({ icon, text, boldText }: AboutListItemProps) => {
  return (
    <li className="my-4 flex">
      <div className="mr-[10px] lg:mr-6">
        <Icon
          className="h-[16px] w-[16px] lg:h-auto lg:w-auto"
          type={icon}
        ></Icon>
      </div>
      <p className="font-montreal text-sm text-ink">
        <span className="font-black">{boldText}</span>{' '}
        <span className="font-normal">{text}</span>
      </p>
    </li>
  )
}

export default AboutListItem
