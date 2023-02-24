import React, { useState, useContext } from "react";
import Header from "../components/Layout/Header";
import Messages from "../components/Messages/Messages";
import Patents from "../components/Patents/Patents";
import ContractContext from "../context/contract-context";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import NotConnected from "../components/Errors/NotConnected";

/**
 *
 * @activeSpace: 0 is Patents, 1 os messages
 */

const Account = () => {
  const contractCtx = useContext(ContractContext);
  const [activeSpace, setActiveSpace] = useState(0);

  const { connected } = contractCtx;

  const changeActiveSpaceHandler = (space) => {
    if (space === "patents") {
      setActiveSpace(0);
      return;
    }

    if (space === "messages") {
      setActiveSpace(1);
      return;
    }

    if (space === "settings") {
      setActiveSpace(2);
      return;
    }

    setActiveSpace(0);
  };

 

  return (
    <>
      <Header />
      <Box
        sx={{
          marginTop: { xs: "4rem" },
          minHeight: { xs: "calc(100vh - 4rem)" },
          padding: "1rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-2)",
            fontSize: "2.5rem",
            color: "var(--dark-700)",
          }}
        >
          Your Address Space
        </Typography>

        {connected &&
            <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {["patents", "messages"].map((sub, index) => {
                return <Box
                key={index}
                sx={{
                  width: "50%",
                  margin: "0",
                  px: 2,
                  py: 1,
                  borderBottom: "2px solid",
                  borderColor: "grey.gray4",
                  cursor: "pointer",
                  "&:hover:not(.active-space-title)": {
                    bgcolor: "primary.fade2",
                  },
    
                  "&.active-space-title": {
                    borderBottom: "2px solid",
                    borderColor: "primary.main",
                    bgcolor: "primary.fade2",
                  },

                  "&:nth-of-type(1)": {
                    borderRadius: "8px 0 0 0",
                  },
                  "&:nth-of-type(2)": {
                    borderRadius: "0 8px 0 0",
                  },
                }}
                className={` ${
                  activeSpace === index ? "active-space-title" : ""
                }`}
                onClick={() => changeActiveSpaceHandler(sub)}
              >
                <Typography variant="body1" component="h2" sx={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    textTransform: "capitalize"
                }}>{sub}</Typography>
              </Box>
            })}
  
            
          </Box>
        }
        

        <div>
          {activeSpace === 0 ? <Patents forAccount={true} /> : <Messages />}
        </div>
      </Box>
    </>
  );
};

export default Account;
