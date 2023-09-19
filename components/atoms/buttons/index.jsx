const Button = ({ children, textColor, backgroundColor }) => (
  <button
    className={`px-3 rounded-xl capitalize py-1 font-medium hover:bg-[#01A165] hover:text-[${backgroundColor}] border-2 border-[${textColor}] text-[${textColor}] bg-[${backgroundColor}]`}
  >
    {children}
  </button>
);


export default Button;