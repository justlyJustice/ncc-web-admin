"use client";

import { useState } from "react";
import Image from "next/image";

import { logo } from "@/public/assets";

const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div className="sidebar">
      <Image alt="logo" className="sidebar-logo" priority src={logo} />

      {menuVisible ? (
        <i className="bx bx-close" onClick={toggleMenu}></i>
      ) : (
        <i className="bx bx-x" onClick={toggleMenu}></i>
      )}
    </div>
  );
};

export default Sidebar;
