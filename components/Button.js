const Button = ({ children, onPress, success, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
