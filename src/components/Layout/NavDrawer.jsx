import React, {useState, useContext} from 'react';
import ContractContext from '../../context/contract-contract'
import { formatAddress } from '../../utils/contractUtils'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

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
          text: "Explore",
          link: "/patents",
      },
      {
          id: "nav-item2",
          text: "Your Patents",
          link: `/${currentAccount}/patents`,
      },
      {
          id: "nav-item3",
          text: `${formatAddress(currentAccount)}`,
          link: `/${currentAccount}`,
      }
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
          py: 2,
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
            pt: 3,
            pr: 1,
        }}>
          
          <ul>
            {DEFAULT_NAVITEMS.map(item => (
                <Box
                    key={item.id}   
                >      
                {item}       
                </Box>
            ))}
        </ul>
      
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
                borderRadius: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}

            
          </Drawer>
          
        </React.Fragment>
      
  );
}