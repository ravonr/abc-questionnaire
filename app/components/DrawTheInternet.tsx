import Paragraph from './Paragraph'
import Button from './Button'

const DrawTheInternet = () => {
  return (
    <div className="boder-solid mr-6 mt-6 border">
      <div className=" flex justify-center border  border-l-0 border-r-0 border-t-0 border-solid p-[10px]">
        <Paragraph>Draw a map of the internet</Paragraph>
      </div>
      <div className="flex min-h-[500px] items-center justify-center">
        <Paragraph>coming soon</Paragraph>
      </div>
      <div className="flex justify-between border border-b-0 border-l-0 border-r-0 border-solid p-[20px]">
        <input type="range" />
        <div className="flex gap-6">
          <button disabled className="uppercase">
            Undo
          </button>
          <Button type="submit" disabled={false} text="submit"></Button>
        </div>
      </div>
    </div>
  )
}

export default DrawTheInternet
