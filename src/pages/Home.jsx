import React, {useContext} from 'react'
import ContractContext from '../context/contract-context'
import Hero from '../components/Landing/Hero'
import Header from '../components/Layout/Header'
import PaddedContainer from '../components/Layout/PaddedContainer'
import Button from '../components/UI/Button'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"




const Home = () => {
  const contractCtx = useContext(ContractContext);

  const {connected, currentAccount, connectWallet } = contractCtx

  const homeGuys = [
    {
      title: "Store and View Patents on the Blockchain",
      image: "assets/p1.png",
      text: "Patentic allows users to easily create, store, and view patents on the platform. Users can upload their patent documents and store them securely on the blockchain, ensuring that they are tamper-proof and immutable. They can also view and manage their patents from their dashboard, making it easier to keep track of their intellectual property.",
      action: <Button sxObj={{
        m: 1,
    }} type="link" link={`/${currentAccount}/create-patent`}>Create Patent</Button>
    },
    {
      title: "Explore Others Patents and Message Owners",
      image: "assets/p2.png",
      text: "Patentic enables users to explore other patents on the platform, allowing them to discover new inventions and ideas. Users can also message the owners of these patents directly, which can facilitate collaboration and licensing opportunities. This feature can help inventors connect with potential partners and investors, and ultimately monetize their inventions.",
      action: <Button sxObj={{
        m: 1,
    }} type="link" link={`/patents`}>Explore</Button>
   
    },
    {
      title: "Recieve PAT Token",
      image: "assets/p3.png",
      text: "Patentic rewards users with PAT tokens when they create a patent on the platform. These tokens can be used to pay for future patent-related services on the platform, or they can be traded on cryptocurrency exchanges. This incentivizes users to create patents on the platform, while also providing a way to access other patent-related services in the future.",
      action: <Button sxObj={{
        m: 1,
    }} type="link" link={`/${currentAccount}/create-patent`}>Create Patent</Button>
   
    },
  ]

  return (
    <div>
        <Header />
        <Box component="main" sx={{
          mt: "4rem",
        }}>
          <Hero />

          <Box sx={{

          }}>
            {homeGuys.map((item, index) => {
              return <PaddedContainer key={index}>
                <Box sx={{
                  minHeight: "calc(100vh - 5rem)"
                }}>
                  <Typography variant="h2" sx={{
                textAlign: "left",
                my: 2,
              }}>{item.title}</Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{
                  display: (index % 2 === 0) ? "flex" : "none",
                  
                }}>
                  <Box>
                  <Typography variant="body1" sx={{
                // textAlign: (index % 2 === 0) ? "left" : "right",
              }}>{item.text}</Typography>
              {connected ? item.action : <Button sx={{
                my: 1
              }} onClick={connectWallet}>Connect Wallet
                </Button>}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6} sx={{
                }}>
                  <Box sx={{
                    position: "relative",
                    width: {xs: "50%", md: "100%"},
                    borderRadius: "8px",
                    overflow: "hidden",

                    "& img": {
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }
                  }}>
                    <img src={item.image} alt={"phone shown"} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={6} sx={{
                  display: (index % 2 === 0) ? "none" : "flex",
                  
                }}>
                  <Box>
                  <Typography variant="body1" sx={{
                // textAlign: (index % 2 === 0) ? "left" : "right",
              }}>{item.text}</Typography>
              {connected ? item.action : <Button sx={{
                my: 1
              }} onClick={connectWallet}>Connect Wallet
                </Button>}
                  </Box>
                </Grid>
              </Grid>
                </Box>
              
            </PaddedContainer>
            })}
          </Box>
        </Box>
       
    </div>
  )
}

export default Home