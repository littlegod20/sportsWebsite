import { IconType } from "react-icons/lib";

interface GamesProps {
  Icon: IconType;
  name: string;
}

const Games: React.FC<GamesProps> = ({ Icon, name }) => {
  return (
    <>
      <div className="flex flex-col w-16 gap-1  justify-center items-center">
        <div className="bg-white bg-opacity-20 p-2 rounded-full">
          <Icon size={20} />
        </div>
        <p className="text-nowrap">{name}</p>
      </div>
    </>
  );
};

export default Games;
