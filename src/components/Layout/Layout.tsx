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
  return <div className="min-h-screen flex gap-2 bg-gray-100">{children}</div>;
};

export default Layout;
