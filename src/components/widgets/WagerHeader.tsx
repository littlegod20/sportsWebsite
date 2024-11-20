import { FaChevronRight } from "react-icons/fa";
import { RiFootballLine } from "react-icons/ri";


const WagerHeader = () => {
  return (
    <>
      <div className="w-full flex justify-between px-2 py-3 bg-[#232324]">
        <div className="flex items-center space-x-1 font-semibold">
          <span>TNF:</span> <span>Bengals</span> <RiFootballLine />
          <span>Ravens</span>
        </div>
        <div className="flex items-center text-blue-600 gap-1">
          <p className="">More Wagers</p>
          <FaChevronRight />
        </div>
      </div>
      <div className="bg-[#343434] w-full flex justify-between px-2 py-3">
        <p>NFL</p>
        <div className="w-4/6 flex justify-evenly uppercase">
          <p>Spread</p>
          <p>Money</p>
          <p>Total</p>
        </div>
      </div>
    </>
  );
}

export default WagerHeader