import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatAddress, shortenText } from '../../utils/contractUtils'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const Patent = ({patentOwner, timestamp, patentName, patentText, patentType}) => {
  let navigate = useNavigate()

  const patentViewHandler = () => {
    navigate(`/patents/${patentOwner}/${timestamp}`);
  }

  console.log("patentType", patentType)

  return (
    
      <Paper elevation={4} sx={{
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: {xs: "calc(100% - 1rem)", md: "100%"},
    padding: "1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    bgcolor: "background.paper",
    transition: ".3s",

    "&:nth-of-type(odd)": {
      margin: {xs: "0 auto 1rem auto", md: "0.5rem 0.5rem 0.5rem 0"},
    },
    "&:nth-of-type(even)": {
        margin: {xs: "0 auto 1rem auto", md: "0.5rem 0 0.5rem 0.5rem"},
    }
      }} onClick={patentViewHandler}>
        <Typography variant="h4" sx={{
          color: "primary.dark",
          width: "70%",
          fontSize: "1.25rem",
          transition: ".3s",
        }} >{patentName}</Typography>
        <Typography variant="body1" sx={{
          mb: 2
        }} >{shortenText(patentText)}</Typography>
        <Box sx={{
          position: "absolute",
          top: "0px",
          right: "1.5rem",
          height: "30px",
          padding: "0 0.5rem",
          fontSize: "0.75rem",
          fontWeight: 600,
          borderRadius: "0 0 8px 8px",
          color: "secondary.contrastText",
          bgcolor: "secondary.dark",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          transition: ".3s",
        }} >
          <Typography variant="caption" sx={{
            margin: 0,
            // marginBottom: "1rem",
          }}>{patentType}</Typography>
          </Box>
        <Typography variant='caption' sx={{
          fontWeight: 500,
          transition: ".3s",
          alignSelf: "flex-end"
        }} >Owned By: {formatAddress(patentOwner)}</Typography>
    </Paper>
    
    
  )
}

export default Patent