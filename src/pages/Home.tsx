import { useState } from "react";
import GameCard from "../components/ui/GameCard";
import GameTab from "../components/widgets/GameTab";
import { gameProps, gameTabs, options } from "../utils/constants";
import Wagers from "../components/widgets/Wagers";
import { FaAngleUp } from "react-icons/fa";
import Games from "../components/widgets/Games";
import WagerHeader from "../components/widgets/WagerHeader";
import WagerTime from "../components/widgets/WagerTime";
import TouchdownScorer from "../components/widgets/TouchdownScorer";
import OddsToggle from "../components/widgets/OddsToggle";

const Home = () => {
  const [tabs, setTabs] = useState<gameProps[]>(gameTabs);
  const [isBetSlip, setIsBetSlip] = useState(false)

  const handleSelectTab = (val: string) => {
    setTabs((prevData) =>
      prevData.map((item) =>
        item.name === val
          ? { name: item.name, isActive: true }
          : { name: item.name, isActive: false }
      )
    );
  };

  const handleBetSlip = () => {
    setIsBetSlip(!isBetSlip)
  }

  return (
    <main className="overflow-y-scroll h-full w-screen text-xs">
      <section className=" w-full text-xs bg-gradient-to-r from-blue-700 to-blue-900 pt-4 pb-2 px-2">
        {/* games */}
        <div className="w-full  flex flex-col space-y-6 items-start pb-4">
          <div className="w-full flex overflow-x-scroll gap-3">
            {options.map((item, index) => (
              <Games name={item.name} key={index} Icon={item.icon} />
            ))}
          </div>
        </div>

        {/*  game cards */}
        <div className="w-full overflow-x-scroll flex gap-4">
          <GameCard />
          <GameCard />
        </div>
      </section>

      {/* game tabs */}
      <div className="flex p-2 overflow-x-scroll w-full bg-[#232324]">
        {tabs.map((item, index) => (
          <GameTab
            name={item.name}
            isActive={item.isActive}
            key={index}
            onClick={() => handleSelectTab(item.name)}
          />
        ))}
      </div>
      <section className="pt-2">
        {/* Spread, money total */}
        <WagerHeader />

        <div className="bg-[#232324] flex flex-col">
          <Wagers />
          <WagerTime />
        </div>
      </section>

      <section className="pb-2">
        <TouchdownScorer />
      </section>

      <section className="">
        <div className={`flex justify-between p-3 bg-[#212121] z-50 transition-all duration-300 ease-in ${isBetSlip ? 'h-32' :''}`}>
          <header className="flex gap-1 items-center font-bold">
            <p className="px-2 py-1 text-black  rounded-full bg-blue-600">1</p>
            <p className="text-blue-600">Betslip</p>
          </header>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleBetSlip}
          >
            <p>$10 wins $30,000</p>
            <FaAngleUp className="text-blue-600" />
          </div>
        </div>

        {/* accept odds movement */}
        <OddsToggle />
      </section>
    </main>
  );
};

export default Home;
