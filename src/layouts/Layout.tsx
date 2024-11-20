import { Outlet } from "react-router-dom";
import DashBoard from "../components/common/DashBoard";
import MoreGames from "../components/common/MoreGames";
import { Suspense } from "react";

const Layout = () => {
  return (
    <main className="h-screen relative flex flex-col justify-between">
      <MoreGames />
      <Suspense>
        <section className="overflow-y-scroll h-full relative">
          <Outlet />
        </section>
      </Suspense>
      <DashBoard />
    </main>
  );
};

export default Layout;
