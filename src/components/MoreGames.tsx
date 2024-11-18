import { LiaHorseHeadSolid } from "react-icons/lia";
import { FaShuffle } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";

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
    <main className="py-4 px-4 w-screen h-[10%]">
      <div className="w-full  flex items-center overflow-x-scroll">
        <section className="flex gap-2 items-center overflow-x-scroll">
          {games.slice(0, 3).map((item, index) => (
            <div
              className=" border-[1px] h-1/2 p-2 flex justify-center items-center gap-1 rounded-md border-sky-500 hover:cursor-pointer focus:border-4"
              key={index}
            >
              <item.icon size={25} />
              <p className="text-nowrap">{item.name}</p>
            </div>
          ))}
          <div className="p-2">
            <p className="text-nowrap">View All</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MoreGames;
