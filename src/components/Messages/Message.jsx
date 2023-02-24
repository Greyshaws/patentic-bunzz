import React from 'react'
import { useContext } from 'react'
import ContractContext from '../../context/contract-context'
import { formatAddress, truncateText, getTimestampDate, getTimestampTime } from '../../utils/contractUtils'
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

const Message = ({to, from, patent, timestamp, text}) => {
    const contractCtx = useContext(ContractContext)

    const { currentAccount } = contractCtx
    
    let isSent = (from === currentAccount) ? true : false

    console.log(timestamp)

  return (
    <Paper elevation={0} variant="outlined"  component="li" sx={{
     
      display: "flex",
      justifyContent: "space-between",
      p: 1,
      borderRadius: 2,
      border: "2px solid",
      borderColor: "grey.gray4",
      mb: 1,
      transition: ".3s",
      cursor: "pointer",
  
      "&:hover": {
        borderColor: "primary.dark",
        bgcolor: "primary.fade2",
      },
      "& .icon-in-message-list": {
        bgcolor: "primary.fade2",
      },
      "&:hover .icon-in-message-list": {
        bgcolor: "background.paper",
      },



      }} >
        <Box sx={{
          display: "flex",
          
          
        }}>
            <Box sx={{
                width: {xs: "30px", md: "30px"},
                height: {xs: "30px", md: "30px"},
                minWidth: {xs: "30px", md: "30px"},
                minHeight: {xs: "30px", md: "30px"},
                borderRadius: "50%",
                transition: ".3s",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "12px",
                mr: 1,
                color: "primary.dark",
        
              }} className={"icon-in-message-list"}>
                
                {isSent ? `TO`: `FM`}
              </Box>
            <Box sx={{
              // border: 1,
            }}  >
                <Typography variant="body1" sx={{
                  fontWeight: 700,
                }} >{isSent ? `${formatAddress(to)}` : `${formatAddress(from)}`}</Typography>
                <Typography variant="caption" sx={{

                }}>{truncateText(text, 25)}...</Typography>
                
            </Box>
        </Box>
          

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }} >
            <Typography variant='caption'>{getTimestampDate(timestamp)}</Typography>
            <Typography variant='caption'>{getTimestampTime(timestamp)}</Typography>
            {/* <p  className={classes["patent"]}>{patent}</p> */}
        </Box>

    </Paper>
  )
}

export default Message