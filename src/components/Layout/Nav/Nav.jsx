import React from 'react'
import { useContext } from 'react'
import ContractContext from '../../../context/contract-context'
import { formatAddress } from '../../../utils/contractUtils'
import classes from "./Nav.module.css"
import NavItem from './NavItem'
import Box from "@mui/material/Box"



const Nav = () => {
    const contractCtx = useContext(ContractContext);

    const { currentAccount, connected } = contractCtx

    const DEFAULT_NAVITEMS = [
        {
            id: "nav-item1",
            text: "Home",
            link: "/",
            requireConnect: false,
        },
        {
          id: "nav-item2",
          text: "Explore",
          link: "/patents",
          requireConnect: false,
      },
      
        {
            id: "nav-item3",
            text: "Your Patents",
            link: `/${currentAccount}/patents`,
            requireConnect: true,
        },
        {
            id: "nav-item4",
            text: `${formatAddress(currentAccount)}`,
            link: `/${currentAccount}`,
            requireConnect: true,
        },
        {
          id: "nav-item6",
          text: "PAT Token",
          link: "/pat-token",
          requireConnect: false,
      },
      {
          id: "nav-item6",
          text: "About",
          link: "/about",
          requireConnect: false,
      },
    ]

  return (
    <nav className={classes["nav"]}>
        <ul>
            {DEFAULT_NAVITEMS.map((item, index) => {
                return (
                    <Box key={index}>
                        {(item.requireConnect && !connected) ? <></> : <NavItem
                    text={item.text}
                    link={item.link}                
                />}
                    </Box>
                )
            })}

       
        <a href={"https://drive.google.com/file/d/1GcjrZTfnGIBB68si1QDxIl3gbTX79wmd/view?usp=drivesdk"}
                    target="_blank"
                    rel="noreferrer" style={{
                textDecoration: "none",
                color: "inherit",
              }}>
                 <li>
                 White Paper
        </li>
                
              </a>
        </ul>
        
    </nav>
  )
}

export default Nav