const FiveBars = () => {
  return (
    <div className="flex w-full flex-col gap-[3px]">
      {Array.from({ length: 5 }, (_, index) => (
        <div className="w-full border border-l-0 border-r-0 border-t-0 border-solid border-borderColor"></div>
      ))}
    </div>
  )
}

export default FiveBars
