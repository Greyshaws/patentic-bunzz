import React, { useContext, useState } from "react";
import { useEffect } from "react";
import ContractContext from "../../context/contract-context";
import PatentsContext from "../../context/patents-context";
import Patent from "./Patent";
import Button from "../UI/Button";
import classes from "./Patents.module.css";
import Loading from "../UI/Loading";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NotConnected from "../Errors/NotConnected";

const Patents = ({ forAccount }) => {
  const [loadingPatents, setLoadingPatents] = useState(false);
  const patentsCtx = useContext(PatentsContext);
  const contractCtx = useContext(ContractContext);

  const { connected, currentAccount } = contractCtx;
  const { getAllPatents } = patentsCtx;

  let patents = [...patentsCtx.patents];

  useEffect(() => {
    const getAllPatentsHandler = () => {
      getAllPatents();
      setLoadingPatents(false);
    };
    if (connected) {
      setLoadingPatents(true);
      getAllPatentsHandler();
    }
  }, [connected]);

  if (forAccount) {
    patents = patents.filter(
      (patent) => patent.patentOwner === contractCtx.currentAccount
    );
  }

  let noPatents = patents.length === 0 && !loadingPatents;

  return (
    <>
      {!connected ? (
        <NotConnected />
      ) : (
        <div className={classes["patents-wrapper"]}>
          <div className={classes["info-wrapper"]}>
            <Typography
              varaint="body1"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 700,
                fontFamily: "var(--font-3)",
                mt: 1,
              }}
            >
              x{patents.length} patents
            </Typography>
            {forAccount && (
              <Button
                type={"link"}
                link={`/${currentAccount}/create-patent`}
                className={classes.btn}
              >
                Create Patent
              </Button>
            )}
          </div>

          {loadingPatents && <Loading />}
          {noPatents && <Box>No Patents</Box>}

          {!loadingPatents && (
            <ul className={classes.patents}>
              {patents.map((patent) => {
                return (
                  <Patent
                    key={`${patent.patentOwner}${patent.timestamp}`}
                    timestamp={patent.timestamp}
                    patentOwner={patent.patentOwner}
                    patentName={patent.patentData.patentName}
                    patentText={patent.patentData.patentText}
                    patentType={patent.patentData.patentType}
                  />
                );
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Patents;
