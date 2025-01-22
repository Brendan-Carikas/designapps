import React from "react";
import { useTheme } from "@mui/material";
import logoNormal from "../../../assets/images/arto-site-logo.png";
import logoReverse from "../../../assets/images/arto-site-logo-reverse.png";

const LogoIcon = (props) => {
  const theme = useTheme();
  const logo = theme.palette.mode === 'dark' ? logoReverse : logoNormal;
  
  return <img alt="Arto" src={logo} height="40px" {...props} />;
};

export default LogoIcon;
