import React from "react";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon?: React.ReactNode;
}

const Button = ({ children, icon, ...others}: ButtonProps) => (
  <button {...others}>{icon && icon} {children}</button>
);

export default Button;
