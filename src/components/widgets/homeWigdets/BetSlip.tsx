import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Button from "../../ui/Button";

interface SlipTypes {
  isBetSlip: boolean;
  handleBetSlip: () => void;
}

const BetSlip: React.FC<SlipTypes> = ({ isBetSlip, handleBetSlip }) => {
  return (
    <>
      <div
        className={`bg-[#212121] transition-all duration-300 ease-in-out  ${
          isBetSlip ? "-transition-y-1" : "overflow-hidden h-14"
        }`}
      >
        <div
          className={`flex justify-between p-3  z-50 ${
            isBetSlip ? " items-start" : ""
          }`}
        >
          <header className="flex gap-1 items-center font-bold">
            <p className="px-2 py-1 text-black  rounded-full bg-blue-600">1</p>
            <p className="text-blue-600">Betslip</p>
          </header>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleBetSlip}
          >
            <p>$10 wins $30,000</p>
            <div className="text-blue-600">
              {isBetSlip ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-between font-bold pb-1">
            <div>
              <p>Cincinnati Bengals</p>
            </div>
            <p>+300</p>
          </div>
          <div className="flex items-end gap-2">
            <div className="flex flex-col w-1/2 space-y-1">
              <label className="uppercase text-gray-400 text-[10px]">
                Moneyline
              </label>
              <input className="border rounded-sm w-full bg-transparent text-white p-[7px] focus-visible:ring-blue-600 focus-visible:ring-1 outline-none" />
            </div>
            <Button
              title="Log in or join to bet"
              className="bg-green-600 rounded-sm w-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BetSlip;
