import React from 'react'
import Hero from '../components/Landing/Hero'
import Header from '../components/Layout/Header'
import Box from "@mui/material/Box"

const Home = () => {
  return (
    <div>
        <Header />
        <Box component="main" sx={{
          mt: "4rem",
          border: 1,
        }}>
          <Hero />
        </Box>
       
    </div>
  )
}

export default Home