import Box from "../../ui/Box";

const TouchdownLists = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-6">
          <div className=" bg-black rounded-full relative p-2">
            {/* jersey color */}
            <img src="/jersey.png" alt="jersey" className="w-6" />
            <div className="absolute top-1/3 -right-3 py-2 px-1 border rounded-full bg-[#212121] flex items-center">
              {/* team logo */}
              <img src="/bengals.png" alt="team" className="w-4" />
            </div>
          </div>
          <p>Zay Flowers</p>
        </div>
        <Box item="1000" isClicked={false} />
      </div>
    </>
  );
};

export default TouchdownLists;
