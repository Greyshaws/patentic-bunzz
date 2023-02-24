import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import LoadingButton from '@mui/lab/LoadingButton';

const buttonStyles = {
  cursor: "pointer",
    display: "inline-block",
    m: 0,
    fontFamily: "inherit",
    bgcolor: "primary.main",
    border: "2px solid",
    borderColor: "black",
    outline: "none",
    fontWeight: 700,
    padding: {xs: "0.5rem 1rem", md: "0.75rem 1.25rem"},
    position: "relative",
    borderRadius: "8px",
    color: "primary.contrastText",
    textTransform: "capitalize",

    "&:focus div": {
        right: "-2px",
        top: "-2px",
    }
}
const buttonDivStyles = {
  position: "absolute",
    fontFamily: "inherit",
    border: "2px solid",
    borderColor: "black",
    width: "calc(100% + 4px)",
    fontWeight: 700,
    height: "calc(100% + 4px)",
    bgcolor: "primary.main",
    display: "flex",
    borderRadius: "6px",
    alignItems: "center",
    justifyContent: "center",
    right: "2px",
    top: "-6px",
}

const UIButton = ({ className, onClick, type, children, link, sxObj=null, loading=false, variant="contained", disabled=false }) => {
  const onClickHandler = () => {
    onClick();
  };

  if (type === "submit") {
    return (
      <Button
    variant={variant}
    disabled={disabled}
      type={type}
      className={` ${className || ""}`}
      onClick={onClickHandler}
      sx={{
        ...buttonStyles,
        ...sxObj,
      }}
    >
      {children}
      <Box sx={{
            ...buttonDivStyles
          }}>{children}</Box>
    </Button>
    );
  }

  if (type === "link") {
    return (
      <Link to={link}>
        <Box sx={{
          ...buttonStyles,
          ...sxObj,
        }} className={`${className || ""}`}>
          {children}
          <Box sx={{
            ...buttonDivStyles
          }} >{children}</Box>
        </Box>
      </Link>
    );
  }
  return (
    <>
    
      <Button
    variant={variant}
    disabled={disabled}
      type={type || "button"}
      className={` ${className || ""}`}
      onClick={onClickHandler}
      sx={{
        ...buttonStyles,
        ...sxObj,
      }}
    >
      {children}
      <Box sx={{
            ...buttonDivStyles
          }}>{children}</Box>
    </Button>
    </>
    
  );
};

export default UIButton;
