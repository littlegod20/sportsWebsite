interface GameTabProps {
  name: string;
  isActive: boolean;
  onClick: (val: string) => void;
}

const GameTab: React.FC<GameTabProps> = ({ name, isActive, onClick }) => {
  return (
    <>
      <div
        className={`rounded-2xl font-medium 
          px-3 py-2 text-xs hover:cursor-pointer
          ${
            isActive ? "bg-blue-600" : "text-blue-600 bg-transparent"
          } cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </div>
    </>
  );
};

export default GameTab;
