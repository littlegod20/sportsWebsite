import { LiaHorseHeadSolid } from "react-icons/lia";
import { FaShuffle } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";

const games = [
  {
    name: "Racing",
    icon: LiaHorseHeadSolid,
  },
  {
    name: "Daily Shuffle",
    icon: FaShuffle,
  },
  {
    name: "Fantasy",
    icon: GoTrophy,
  },
  {
    name: "Fantasy",
    icon: GoTrophy,
  },
  {
    name: "Fantasy",
    icon: GoTrophy,
  },
];

const MoreGames = () => {
  return (
    <main className=" w-screen sticky top-0 z-50">
      <div className="w-full py-2 px-4 flex items-center overflow-x-scroll text-xs">
        <section className="flex gap-2 items-center overflow-x-scroll">
          {games.slice(0, 3).map((item, index) => (
            <div
              className=" border-[1px] h-1/2 p-2 flex justify-center items-center gap-1 rounded-md border-sky-500 hover:cursor-pointer focus:border-4"
              key={index}
            >
              <item.icon size={15} />
              <p className="text-nowrap">{item.name}</p>
            </div>
          ))}
          <div className="p-2">
            <p className="text-nowrap">View All</p>
          </div>
        </section>
      </div>

      <div className="flex justify-between w-full p-3 items-center bg-gradient-to-r from-blue-700 to-blue-900 sticky top-0">
        <div className="flex items-center">
          <img src="/fanDuelLogo.png" className="w-8" />
          <p className="uppercase font-bold leading-4 text-xs">
            Fanduel <br />
            <span className="font-light">sportsbook</span>
          </p>
        </div>
        <div className="flex gap-6 items-center text-xs">
          <div>
            <IoMdSearch color="white" className="text-xl" />
          </div>
          <div className="space-x-4">
            <button className="px-3 py-2 bg-blue-600 shadow-md  rounded-md">
              Log in
            </button>
            <button className="px-4 py-2 rounded-md shadow-md bg-green-600">
              Join
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoreGames;
