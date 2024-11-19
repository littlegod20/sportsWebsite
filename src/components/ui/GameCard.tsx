import Button from "./Button";

const GameCard = () => {
  return (
    <>
      <div className=" bg-blue-950 flex flex-col space-y-1 rounded-t-lg">
        <div className="w-72 h-32">
          <img src="/nfl.jpg" className="w-full h-full rounded-t-lg object-cover" />
        </div>
        <div className="flex bg-blue-950 p-1 gap-2 w-full">
          <Button title="More Info" className="px-4 border rounded w-1/2 " />
          <Button title="Log in" className="bg-green-600 px-4 rounded w-1/2" />
        </div>
      </div>
    </>
  );
};

export default GameCard;
