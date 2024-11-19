import Box from "../ui/Box";


const Wagers = () => {
  return (
    <div className="flex">
        <section className="flex justify-center flex-col w-1/3 px-2 py-1">
          <div className="flex w-full justify-between items-center p-1">
            <div className="flex items-center gap-1">
              <img src="/bengals.png" className="w-6" />
              <p className="text-wrap truncate w-10">CIN Bengaleife</p>
            </div>
            <div className="bg-gray-500 px-1 rounded-sm text-[8px] flex items-center">
              28
            </div>
          </div>

          <div className="flex items-center text-gray-200">
            @<div className="w-full h-[1px] bg-gray-400"></div>
          </div>

          <div className="flex w-full justify-between items-center p-1">
            <div className="flex items-center gap-1">
              <img src="/bengals.png" className="w-6" />
              <p className="text-wrap truncate w-10 ">CIN Bengaleife</p>
            </div>
            <div className="bg-gray-500 px-1 rounded-sm text-[8px] flex items-center">
              28
            </div>
          </div>
        </section>

        <section className="bg-green-400 w-4/6">
          <div className="">
            <Box/>
          </div>
        </section>
      
    </div>
  );
}

export default Wagers