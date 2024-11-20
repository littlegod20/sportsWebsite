import { Switch } from "@mui/material";
import { IoMdInformationCircleOutline } from "react-icons/io";

const OddsToggle = () => {
  return (
    <>
      <div className="flex justify-between items-center p-2 border-y border-gray-500 bg-[#212121] ">
        <div className="flex gap-2 ">
          <p>Accept odds movements</p>
          <IoMdInformationCircleOutline
            size={20}
            className="text-blue-600 cursor-pointer                                                                                                                                                                                    "
          />
        </div>
        <div>
          <Switch />
        </div>
      </div>
    </>
  );
};

export default OddsToggle;
