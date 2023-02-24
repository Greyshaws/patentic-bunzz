import React, {useState} from 'react'
import Box from "@mui/material/Box"
import Header from '../components/Layout/Header'
import Typography from "@mui/material/Typography"
import PaddedContainer from '../components/Layout/PaddedContainer'
import LogoIcon from '../components/UI/LogoIcon'
import {formatAddress} from "../utils/contractUtils"

const PATToken = () => {
    const [copiedAddr, setCopiedAddr] = useState(false);

    let address = "0x279E04312587f55bFd7bCbe86a95fB6EA580B027"
    let chain = "Mumbai Testnet"
    let decimals = 18

    const copyHandler = (type) => {

        
          navigator.clipboard.writeText(address);
    
    
            setCopiedAddr(true)
    
            setTimeout(() => {
                      setCopiedAddr(false)
            }, 3000);
        

        
      }
  return (
    <>
        <Header />

        <Box component="main" sx={{
            mt: "4rem"
        }}>
            <PaddedContainer >
                <Box sx={{
                    p: 2,
                }}>
                    <Typography variant="h1" sx={{
                        my: 2,
                    }}>PAT Token</Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        my: 2,
                    }}>
                        <Box sx={{
                            width: {xs: "50px", md: "80px"},
                            height: {xs: "50px", md: "80px"},
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <LogoIcon />
                        </Box>
                        
                    </Box>
                        <Typography variant="body1">PAT Token is a token you recieve when you create a patent</Typography>

                        <Box component="ul" sx={{

                        }}>
                            <Typography variant="h4" sx={{
                                textAlign: "left"
                            }}>How to Add PAT Token to Metamask</Typography>
                            <Box component="li">
                                Get Metamask and Open It
                            </Box>
                            <Box component="li">
                                Click on "import token"
                            </Box>
                            <Box component="li">
                                Add the details:
                                <Box component="ul">
                                    <Box compoent="li" sx={{
                                        display: "flex",
                                        alignItems: "flex-end"
                                    }}>
                                        Contract Address: {formatAddress(address)}
                                        <Typography variant="caption" sx={{
                                            fontWeight: 700,
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: "secondary.dark"
                                            }
                                        }} onClick={copyHandler}> {copiedAddr ? "- copied" : "- copy"}</Typography>
                                    </Box>
                                    <Box compoent="li">
                                        Chain: {chain}
                                        
                                    </Box>
                                    <Box compoent="li">
                                        decimals: {decimals}
                                        
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                </Box>
            </PaddedContainer>

        </Box>
    </>
  )
}

export default PATToken