
interface ButtonProps {
  title: string,
  onClick?: ()=>void
  className?:string
}

const Button: React.FC<ButtonProps> = ({title, onClick, className}) => {
  return (
    <div className={`p-2 flex justify-center items-center ${className}`}>
      <button onClick={onClick}>
        {title}
      </button>
    </div>
  )
}

export default Button