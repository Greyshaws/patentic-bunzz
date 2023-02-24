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
                      Patentic is a
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <LogoIcon />
                  </Grid>
                  <Grid item xs={12} md={12} >
                  <Typography variant="body1" sx={{
                    textAlign: {xs: "left", md: "center"}
                  }}>
                      Patentic is a
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