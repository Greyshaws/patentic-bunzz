import React from 'react'
// import { useContext } from 'react'
// import ContractContext from '../../context/contract-context'
import Logo from '../UI/Logo'
import { Link } from 'react-router-dom'
// import { formatAddress } from '../../utils/contractUtils'
import classes from "./Header.module.css"
import Nav from './Nav/Nav'
import Box from "@mui/material/Box"
import NavDrawer from './NavDrawer'

const Header = () => {
  // const contractCtx = useContext(ContractContext)

  // const {connected, currentAccount} = contractCtx;

  return (
    <header className={classes.header}>
      <Link to={"/"}>
      <Logo />
      </Link>

        <Box sx={{
          display: {xs: "block", md: "none"}
        }}>
          <NavDrawer />
        </Box>
        
        <Nav />
      
        
    </header>
  )
}

export default Header