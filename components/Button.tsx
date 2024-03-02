import { MouseEventHandler } from "react";

interface Props {
  children: React.ReactNode;
  onClick: (e) => void;
}

const Button = ({ children, onClick, ...props }: Props) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
