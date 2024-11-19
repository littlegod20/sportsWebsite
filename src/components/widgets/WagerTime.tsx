import { FaChevronRight } from "react-icons/fa";


const WagerTime = () => {
  return (
    <>
      <div className="w-full flex items-center px-2 pt-1">
        <div className="flex justify-start items-center gap-1">
          <img src="/casino.png" className="w-10" />
          <img src="/live.png" className="w-10" />
          <img src="/stream.png" className="w-16 h-8 object-cover" />
        </div>
        <div className="flex justify-between w-3/5 text-gray-300">
          <p>04- 02:29</p>
          <div className="flex items-center text-blue-600 gap-1">
            <p>More</p>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default WagerTime