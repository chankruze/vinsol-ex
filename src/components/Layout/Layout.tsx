/*
Author: chankruze (chankruze@gmail.com)
Created: Fri May 13 2022 09:34:56 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex gap-1 bg-gray-100 overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;
