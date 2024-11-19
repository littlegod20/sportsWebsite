import { Outlet } from "react-router-dom";
import DashBoard from "./components/widgets/DashBoard";
import MoreGames from "./components/widgets/MoreGames";

const Layout = () => {
  return (
    <main className="h-screen relative flex flex-col justify-between">
      <MoreGames />
      <section className="pb-4 overflow-y-scroll h-full relative">
        <Outlet />
      </section>
      <DashBoard />
    </main>
  );
};

export default Layout;
