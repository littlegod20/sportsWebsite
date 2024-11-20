import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

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
      <div className="bg-[#212121] px-2 py-4 flex justify-between">
        <div className="flex items-center gap-6">
          <div className=" bg-black rounded-full relative p-2">
            <img src="/jersey.png" alt="jersey" className="w-6" />
            <div className="absolute top-1/3 -right-3 py-2 px-1 border rounded-full bg-[#212121] flex items-center">
              <img src="/bengals.png" alt="team" className="w-4" />
            </div>
          </div>
          <p>Zay Flowers</p>
        </div>
        <div className="border flex items-center p-2 rounded border-blue-600">
          <p>+1000</p>
        </div>
      </div>
    </>
  );
};

export default TouchdownScorer;
