import { useState } from "react";
import GameCard from "../components/ui/GameCard";
import GameTab from "../components/widgets/GameTab";
import { gameProps, gameTabs, options } from "../utils/constants";
import { FaChevronRight } from "react-icons/fa";
import { RiFootballLine } from "react-icons/ri";
import Wagers from "../components/widgets/Wagers";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Home = () => {
  const [tabs, setTabs] = useState<gameProps[]>(gameTabs);

  const handleSelect = (val: string) => {
    setTabs((prevData) =>
      prevData.map((item) =>
        item.name === val
          ? { name: item.name, isActive: true }
          : { name: item.name, isActive: false }
      )
    );
  };

  return (
    <main className="overflow-y-scroll w-screen text-xs">
      <section className=" w-full text-xs bg-gradient-to-r from-blue-700 to-blue-900 pt-4 pb-2 px-2">
        <div className="w-full  flex flex-col space-y-6 items-start pb-4">
          <div className="w-full flex overflow-x-scroll gap-3">
            {options.map((item, index) => (
              <div
                className="flex flex-col w-16 gap-1  justify-center items-center"
                key={index}
              >
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  <item.icon size={20} />
                </div>
                <p className="text-nowrap">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-x-scroll flex gap-4">
          <GameCard />
          <GameCard />
        </div>
      </section>
      <div className="flex p-2 overflow-x-scroll w-full bg-[#232324]">
        {tabs.map((item, index) => (
          <GameTab
            name={item.name}
            isActive={item.isActive}
            key={index}
            onClick={() => handleSelect(item.name)}
          />
        ))}
      </div>
      <section className="pt-2">
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
          <div className="w-1/2 flex justify-evenly uppercase">
            <p>Spread</p>
            <p>Money</p>
            <p>Total</p>
          </div>
        </div>

        <div className="bg-[#232324] flex flex-col">
          <Wagers />
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
        </div>
      </section>

      <section className="w-full bg-[#343434] p-4">
        <div>
          <p className="font-bold pb-4">Any Time Touchdown Scorer</p>
          <div className="flex items-center gap-1">
            <IoMdInformationCircleOutline size={25} />
            <p>
              A touchdown scorer is a player who carries or receives the ball in
              the end zone... <span className="text-blue-600">Read more</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
