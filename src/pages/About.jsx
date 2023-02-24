import React from 'react'
import Header from "../components/Layout/Header";
import Team from "../components/Team"
import Features from "../components/Features"
import PaddedContainer from "../components/Layout/PaddedContainer"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LogoIcon from '../components/UI/LogoIcon';

const About = () => {
  return (
    <div>
        <Header />
        <Box component="main" sx={{
          mt: "5rem"
        }}>
          <Box sx={{
            minHeight: "calc(100vh - 5rem)"
          }}>
            <PaddedContainer>
            <Box>
              <Typography variant="h1" sx={{
                my: 2
              }}>What's Patentic</Typography>
              <Grid container spacing={1}>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body1">
                    Patentic is a decentralized platform for patent registration and management on the blockchain. It enables inventors and creators to protect their intellectual property and monetize their patents in a secure, transparent, and efficient manner. The platform leverages the power of blockchain technology to provide a decentralized, immutable, and auditable database of patents, making it easier for inventors to prove ownership, enforce their patents, and license their inventions. Patentic is built on the Polygon network, enabling fast and affordable transactions for users. With Patentic, you can easily create and manage your patents without the need for third-party intermediaries or expensive bureaucratic processes.
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <LogoIcon />
                  </Grid>
                  <Grid item xs={12} md={12} >
                  <Typography variant="body1" sx={{
                    textAlign: {xs: "left", md: "center"}
                  }}>
                      Patentic's mission is to make the patent system more accessible and user-friendly, while providing inventors and creators with the tools they need to protect and monetize their ideas in a fair and transparent way.
                    </Typography>
                  </Grid>
              </Grid>
            </Box>
            </PaddedContainer>
            </Box>
          

            <Box sx={{
              minHeight: "calc(100vh - 4rem)",
            }}>
              <PaddedContainer>
              <Features />
              </PaddedContainer>
            </Box>

            <Box sx={{
              minHeight: "calc(100vh - 4rem)",
            }}>
              <PaddedContainer>
              <Team />
              </PaddedContainer>
            </Box>
            
            
          
        </Box>
    </div>
  )
}

export default About