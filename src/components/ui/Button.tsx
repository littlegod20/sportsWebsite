interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className }) => {
  return (
    <div
      className={`p-2 flex justify-center items-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
