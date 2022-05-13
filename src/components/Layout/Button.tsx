/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 09:59:26 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bg?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  bg = "bg-blue-500",
}) => {
  return (
    <div
      className={`py-2 px-3 text-white flex items-center gap-2 justify-center 
      cursor-pointer ${bg} hover:opacity-80 rounded-md`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
