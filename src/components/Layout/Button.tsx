/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 09:59:26 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div
      className="p-3 text-white bg-blue-600 flex items-center gap-2 justify-center 
      cursor-pointer hover:bg-blue-600/80 rounded-md"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
