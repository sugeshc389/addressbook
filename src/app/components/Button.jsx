const Button = ({ value,onClick,className}) => {
 
    return (
      <div className="text-center">
        <button onClick={onClick} className={className} >
          {value}
        </button>
      </div>
    );
  };
  
  export default Button;  