import './card.css'
const Card = () => {
  return (
    <div className='relative shadow-md bg-white'>
      <div className="img_wrapper h-[250px]">
          <img src="/hero1.jpeg" className="img_1 w-full object-cover object-center h-[250px]" alt="" />
          <img src="/hero2.jpeg" className="img_2 w-full object-cover object-center h-[250px]" alt="" />
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