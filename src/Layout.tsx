import { Outlet } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import MoreGames from "./components/MoreGames";

const Layout = () => {
  return (
    <main className="h-screen">
      <MoreGames />
      <section className="py-4 h-[80%] overflow-y-scroll ">
        <Outlet />
      </section>
      <DashBoard />
    </main>
  );
};

export default Layout;
