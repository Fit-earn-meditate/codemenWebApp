
const Button = ({
  backgroundColor,
  textColor,
  children
}) => (
  <a className={`
  ${backgroundColor ? `bg-[${backgroundColor}]` : ""} 
  ${!backgroundColor ? "border-2" : ""} 
  ${!backgroundColor ? `border-[${textColor}]` : ""} 
  text-[${textColor}] 
  capitalize px-4 py-0.5 rounded-full font-normal`}>
    <span className="align-text-bottom">{children}</span>
  </a>
);

export default Button;

