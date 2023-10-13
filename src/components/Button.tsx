import React from "react";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button = React.memo(({ children, icon=null, ...others}: ButtonProps) => (
  <button {...others}>{icon ? icon : null} {children}</button>
));


export default Button;
