import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import TouchdownLists from "./TouchdownLists";

const TouchdownScorer = () => {
  return (
    <>
      <div className="w-full bg-[#343434] p-4">
        <p className="font-bold pb-4">Any Time Touchdown Scorer</p>
        <div className="flex items-center gap-1">
          <IoMdInformationCircleOutline size={25} className="cursor-pointer" />
          <p>
            A touchdown scorer is a player who carries or receives the ball in
            the end zone...{" "}
            <Link to="/" className="text-blue-600">
              Read more
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-[#212121] px-2 py-4">
        <TouchdownLists />
      </div>
    </>
  );
};

export default TouchdownScorer;
