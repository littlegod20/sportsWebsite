import { Outlet } from "react-router-dom";
import DashBoard from "./components/common/DashBoard";
import MoreGames from "./components/common/MoreGames";

const Layout = () => {
  return (
    <main className="h-screen relative flex flex-col justify-between">
      <MoreGames />
      <section className="overflow-y-scroll h-full relative">
        <Outlet />
      </section>
      <DashBoard />
    </main>
  );
};

export default Layout;
