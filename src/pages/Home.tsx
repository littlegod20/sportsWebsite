import { IoMdSearch } from "react-icons/io";

const Home = () => {
  return (
    <main className="overflow-y-scroll">
      <section className="w-full bg-blue-700 h-64 p-2 flex justify-between items-start">
        <div className="flex justify-between w-full bg-pink-300 items-center">
          <div className="flex items-center">
            <img src="/fanDuelLogo.png" className="w-10" />
            <p className="uppercase font-bold leading-4 text-base">
              Fanduel <br />
              <span className="font-light">sportsbook</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <IoMdSearch color="white" className="text-2xl" />
            </div>
            <div className="space-x-4">
              <button>log in</button>
              <button>join</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
