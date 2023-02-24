import React from 'react'
import { formatAddress } from '../../utils/contractUtils'
import {FontAwesomeIcon }from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import classes from "./MessageToFrom.module.css"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const MessageToFrom = ({to, from}) => {
  return (
    <Box sx={{
        display: "flex",
    justifyContent: "center",
    mb: 2,
    position: "relative",
    }} className={classes["to-from"]}>
        <Typography sx={{
            m: 0,
            bgcolor: "primary.fade2",
            border: "2px solid",
            boderColor: "primary.dark",
            borderRadius: "1.5rem",
            padding: "0.75rem 1.5rem",
        }}>
            {formatAddress(to)}
        </Typography>
        <Box sx={{
            fontSize: "2rem",
    color: "primary.main",
    fontWeight: 300,
    margin: "0 2rem",
        }}> 
            <FontAwesomeIcon icon={faArrowRightLong} />
        </Box>
        <Box sx={{
            fontWeight: 300,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "2rem",
            color: "secondary2.dark",
            margin: "0",
        }}>
            <FontAwesomeIcon icon={faArrowRightLong} />
        </Box>
        <Typography sx={{
            m: 0,
            bgcolor: "primary.fade2",
            border: "2px solid",
            boderColor: "primary.dark",
            borderRadius: "1.5rem",
            padding: "0.75rem 1.5rem",
        }}>
            {formatAddress(from)}
        </Typography>
    </Box>
  )
}

export default MessageToFrom