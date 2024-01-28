import './card.css'
const Card = () => {
  return (
    <div className='relative border shadow-md bg-white'>
      <span className='absolute left-[10px] top-[10px] bg-destructive z-10 w-[50px] h-[50px] rounded-full text-background rotate-[-25deg] flex justify-center items-center'>30%</span>
      <div className="img_wrapper h-[250px]">
          <img src="/cap1.JPG" className="img_1 w-full object-cover object-center h-[250px]" alt="" />
          <img src="/cap2.JPG" className="img_2 w-full object-cover object-center h-[250px]" alt="" />
      </div>

      <div className='py-3 px-2'>
        <h2 className='text-start'>FLYING SKELETON' TAPESTRY ZIP SHIRT</h2>
        
        <div className='flex justify-between items-start gap-2'>
          <p className='opacity-[.5] mt-2'>Best quality</p>

          <span className='flex flex-col items-end justify-start gap-1'>
            <h3 className='opacity-[.5] line-through'>$140.00USD</h3>
            <h3>$100.00USD</h3>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card