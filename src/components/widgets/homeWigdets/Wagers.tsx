import { useState } from "react";
import Box from "../../ui/Box";
import Vs from "./Vs";

const boxes = [
  {
    odds: "+3.5 -146",
  },
  {
    odds: "+300",
  },
  {
    odds: "O 63.5 -162",
  },
  {
    odds: "-3.5 -112",
  },
  {
    odds: "-430",
  },
  {
    odds: "U 63.5 -215",
  },
];

const Wagers = () => {
  const [isBox, setIsBox] = useState(
    boxes.map((item) => ({ ...item, isClicked: false }))
  );

  const handleBoxClick = async (val: string) => {
    setIsBox((prev) =>
      prev.map((item) =>
        val === item.odds
          ? { ...item, isClicked: !item.isClicked }
          : { ...item, isClicked: item.isClicked }
      )
    );
  };

  return (
    <div className="flex pt-1">
      <section className="flex justify-center flex-col w-1/3 px-2 py-1">
        {/* team vs team */}
        <Vs />
      </section>
      <section className="w-4/6 p-1 flex flex-col gap-2">
        <div className=" flex w-full justify-evenly">
          {isBox.slice(0, 3).map((item, index) => (
            <Box
              OnClick={handleBoxClick}
              item={item.odds}
              isClicked={item.isClicked}
              key={index}
            />
          ))}
        </div>
        <div className=" flex w-full justify-evenly">
          {isBox.slice(3).map((item, index) => (
            <Box
              OnClick={handleBoxClick}
              item={item.odds}
              isClicked={item.isClicked}
              key={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wagers;
