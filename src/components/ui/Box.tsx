interface BoxTypes {
  item: string;
  isClicked: boolean;
  OnClick?: (val: string) => void;
}

const Box: React.FC<BoxTypes> = ({ isClicked, OnClick, item }) => {
  return (
    <>
      <div
        className={`border border-blue-600 ${
          isClicked ? "bg-blue-600" : ""
        } w-16 p-2 text-center flex flex-col rounded justify-center items-center cursor-pointer`}
        onClick={() => (OnClick ? OnClick(item) : "")}
      >
        <p>{item}</p>
      </div>
    </>
  );
};

export default Box;
