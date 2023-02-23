import React, { useContext, useState, useEffect } from 'react'
import ContractContext from '../../context/contract-context'
import Loading from '../UI/Loading'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom";
import PaddedContainer from '../Layout/PaddedContainer'


const Hero = () => {
    const contractCtx = useContext(ContractContext);
    const [waitingConnection, setWaitingConnection ] = useState(false)

    const {connected, currentAccount } = contractCtx

    const connectWalletHandler = () => {
        contractCtx.connectWallet()
    }

    useEffect(() => {
        if (connected) {
            setWaitingConnection(true)
        } else {
            setWaitingConnection(false)
        }
    }, [connected])

  return (
    <PaddedContainer>   
         <Box sx={{
        bgcolor: "background.paper",
        width: "100%",
        height: { md: "calc(100vh - 4rem)"},
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: "1rem",
    }} >
        <Typography variant="h1" sx={{
            textAlign: "center",
            maxWidth: "90%",
            mb: 1,
            color: "primary.main",
        }}>
            Your Tamperproof Prove Over Intelectual Properties
        </Typography>
        <Typography variant="h3" sx={{
            textAlign: "center",
            fontWeight: "400",
            fontSize: {sx: "1.25rem", md: "1.5rem"},
            mb: "1rem",
            maxWidth: "90%",
            fontFamily: "'Lato', sans-serif",
        }}>
 Keep your ideas, lyrics, theorems, write-ups on the blockchain <br /> as immutable proof that you came up with it.
        
        </Typography>
        

        <Box>
        {!connected && <Button variant="contained" loading={waitingConnection} onClick={connectWalletHandler} sx={{
            m: 1,
        }} >Connect Wallet</Button>}
        {connected && <Link to={`/${currentAccount}/create-patent`}>
            <Button variant="contained"  sx={{
                m: 1,
            }}>Create Patent</Button>
        </Link>}
        </Box>

        {false && <Loading />}
        
    </Box>
    </PaddedContainer>
   
  )
}

export default Hero