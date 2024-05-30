import Paragraph from './Paragraph'
import Button from './Button'

const DrawTheInternet = () => {
  return (
    <div className="boder-solid mx-[10px] mt-4 border lg:ml-8 lg:mr-6 lg:mt-6">
      <div className=" flex justify-center border  border-l-0 border-r-0 border-t-0 border-solid p-[10px]">
        <p className="font-andale text-sm font-normal leading-[19.6px] text-borderColor">
          Draw a map of the internet
        </p>
      </div>
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="font-andale text-sm font-normal leading-[19.6px] text-borderColor">
          coming soon
        </p>
      </div>
      <div className="flex flex-col justify-between border border-b-0 border-l-0 border-r-0 border-solid p-[10px] lg:flex-row lg:p-[20px]">
        <div>
          <input type="range" className="rounded-none" />
          <p className="text-center">brush size</p>
        </div>
        <div className="mt-4 flex flex-col gap-4 lg:mt-0 lg:flex-row lg:gap-6">
          <button
            disabled
            className="leading-[22.4px ] font-andale text-base font-normal uppercase text-borderColor"
          >
            Undo
          </button>
          <Button type="submit" disabled={false} text="submit"></Button>
        </div>
      </div>
    </div>
  )
}

export default DrawTheInternet
