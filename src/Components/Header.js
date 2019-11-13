import React from "react";
import Logo from "../Images/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper" />
      <img alt="Logo" src={Logo} className="logo" />
    </div>
  );
}
