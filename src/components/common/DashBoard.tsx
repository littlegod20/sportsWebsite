import { Link } from "react-router-dom";
import { useState, useTransition } from "react";
import { tabs } from "../../utils/constants";

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState("/");
  const [isPending, startTransition] = useTransition();

  const handleActiveTab = (val: string) => {
    startTransition(() => {
      setActiveTab(val);
    });
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
