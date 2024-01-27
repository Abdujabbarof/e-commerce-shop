import { RxDividerHorizontal } from "react-icons/rx";
import { FaQuoteLeft } from "react-icons/fa";

const TestimionalCard = () => {
  return (
    <div className="relative w-full border py-5 px-3 pt-[35px] shadow-md bg-white rounded-[40px] rounded-es-none">
        <FaQuoteLeft className="absolute text-[35px] text-input top-[10%] left-[12%] translate-x-[-50%]" />
        <p className="text-[15px] text-center relative z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil assumenda sit ipsum voluptatum unde eum voluptatibus error fugiat quisquam!</p>

        <div>
          <h3 className="text-start text-[14px] font-semibold mt-4 flex justify-start items-center gap-1">
            <RxDividerHorizontal /> 
            Abdulloh Abdujabborov</h3>
        </div>
    </div>
  )
}

export default TestimionalCard