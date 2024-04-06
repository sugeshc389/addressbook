const Button = ({ value,onClick}) => {
 
    return (
      <div className="text-center">
        <button onClick={onClick} className="w-[100px] h-[50px] bg-[#5D87FF] rounded-md text-white text-[13px]  ">
          {value}
        </button>
      </div>
    );
  };
  
  export default Button;  