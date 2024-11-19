import { useState } from "react";
import GameCard from "../components/ui/GameCard";
import GameTab from "../components/widgets/GameTab";
import { gameProps, gameTabs, options } from "../utils/constants";
import { FaChevronRight } from "react-icons/fa";
import { RiFootballLine } from "react-icons/ri";
import Wagers from "../components/widgets/Wagers";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa";
import Switch from '@mui/material/Switch'

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
    <main className="overflow-y-scroll h-full w-screen text-xs">
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

      <section className="pb-2">
        <div className="w-full bg-[#343434] p-4">
          <p className="font-bold pb-4">Any Time Touchdown Scorer</p>
          <div className="flex items-center gap-1">
            <IoMdInformationCircleOutline size={25} />
            <p>
              A touchdown scorer is a player who carries or receives the ball in
              the end zone... <span className="text-blue-600">Read more</span>
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
      </section>

      <section className="">
        {/* <div className="flex p-2">
          <p className="">1</p>
          <header>Betslip</header>
        </div> */}
        <div className="flex justify-between p-3 bg-[#212121] z-50">
          <header className="flex gap-1 items-center font-bold">
            <p className="px-2 py-1 text-black  rounded-full bg-blue-600">1</p>
            <p className="text-blue-600">Betslip</p>
          </header>
          <div className="flex items-center gap-2">
            <p>$10 wins $30,000</p>
            <FaAngleUp className="text-blue-600" />
          </div>
        </div>
        <div className="flex justify-between items-center p-2 border-y border-gray-500 bg-[#212121] ">
          <div className="flex gap-2">
            <p>Accept odds movements</p>
            <IoMdInformationCircleOutline size={20} className="text-blue-600" />
          </div>
          <div>
            <Switch/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
