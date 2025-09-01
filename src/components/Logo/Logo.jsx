import React from "react";
import { LogoStyled } from "../NavBar/NavBarStyled";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoStyled onClick={() => navigate("/")}>
      <h1>
        Jo
        <span>sé</span>
      </h1>
    </LogoStyled>
  );
};

export default Logo;
