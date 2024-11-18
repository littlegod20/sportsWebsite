import { IoHomeOutline } from "react-icons/io5";
import { LiaTableTennisSolid } from "react-icons/lia";
import { MdListAlt } from "react-icons/md";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const tabs = [
  {
    name: "Home",
    icon: IoHomeOutline,
    path: "/",
  },
  {
    name: "All Sports",
    icon: LiaTableTennisSolid,
    path: "/allSports",
  },
  {
    name: "My Bets",
    icon: MdListAlt,
    path: "/myBets",
  },
  {
    name: "Live Now",
    icon: MdOutlineOnlinePrediction,
    path: "/liveNow",
  },
  {
    name: "Account",
    icon: FaRegUser,
    path: "/account",
  },
];

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState("/");

  const handleActiveTab = (val: string) => {
    setActiveTab(val);
  };

  return (
    <main className="h-[10%] bg-[#232324] flex item-center w-full">
      <section className="flex w-full justify-evenly items-center h-full">
        {tabs.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex items-center flex-col ${
              activeTab === item.path ? "text-sky-600" : ""
            }`}
            onClick={() => handleActiveTab(item.path)}
          >
            <item.icon size={20} />
            <p className="text-xs">{item.name}</p>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default DashBoard;
