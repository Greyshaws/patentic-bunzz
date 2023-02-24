import React, {useState, useContext} from 'react';

import { Link } from 'react-router-dom'
import ContractContext from '../../context/contract-context'
import { formatAddress } from '../../utils/contractUtils'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
// import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import NotConnected from '../Errors/NotConnected';

export default function NavDrawer({anchor="left" }) {

  const contractCtx = useContext(ContractContext);

 

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        link: "/",
        requireConnect: false,
    },
    {
        id: "nav-item6",
        text: "About",
        link: "/",
        requireConnect: false,
    },
  ]
  

  const toggleDrawer = (anchor, open) => (event) => {
    
    setState({ ...state, [anchor]: open });
  };



  const list = (anchor) => (
    <Box
      sx={{ 
        width: "90vw",
      position: "relative", }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
        <Box sx={{
          display: "flex",
          alignItems: "center",
          py: 3,
          px: 2,
            
        }}>
         
          <Typography variant="h4" sx={{
            fontSize: "1.25rem",
            fonWeight: 700,
            m: 0
          }}>
            Patentic
          </Typography>
        </Box>
        <Divider />
        <Box sx={{
            pt: 2,
            pr: 1,

        }}>
          
          <Box component="ul" sx={{
            paddingLeft: 0,
            listStyle: "none",
            padding: "0",
          }}>
            {DEFAULT_NAVITEMS.map(item => {
                

                return (
                <>
                {(item.requireConnect && !connected) ? <></> : <Link to={item.link} key={item.text}>
                    <Box component="li" sx={{
                       py: 1,
                       px: 2,
                       transition: ".3s",
                       borderRadius: "0 1rem 1rem 0",
                       "&:hover": {
                           bgcolor: "primary.fade2"
                       }
                    }}>
                        {item.text}
                    </Box>
                </Link>}
                </>
                    
               )
            })}
        </Box>
      
        </Box>
        
    </Box>
  );

  return (
    
        <React.Fragment >
        <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(anchor, true)}
              sx={{
                p: 1.5,
                borderRadius: "8px",
                mr: 2, 
                "&:hover": {
                    bgcolor: "primary.fade2"
                }
              }}
            >
                |||
              {/* <MenuIcon /> */}
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}

            
          </Drawer>

          {!connected && <NotConnected />}
          
        </React.Fragment>
      
  );
}