import React from "react";

interface IButtonProps {
  children?: React.ReactNode;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  onClick?: () => void;
}
const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`rounded-md bg-blue-600 text-black ${className}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
