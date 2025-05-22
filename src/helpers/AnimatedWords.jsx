const AnimatedWords = () => {
  return (
    <div className="flex  items-center justify-center  font-bold text-stsLight">
      <div className=" text-center space-y-12">
        <div className="text-center text-5xl font-bold">
          <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
            <span className="animate-word col-span-full row-span-full">Protect</span>
            <span className="animate-word-delay-1 col-span-full row-span-full">Automate</span>
            <span className="animate-word-delay-2 col-span-full row-span-full">Innovate</span>
            <span className="animate-word-delay-3 col-span-full row-span-full">STS</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AnimatedWords
