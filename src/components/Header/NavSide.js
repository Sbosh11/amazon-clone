/*import MenuIcon from '@mui/icons-material/Menu';


export default function SideDrawer() {
return (
    
  
               

          <ul className='myflex border-h' >
                   <MenuIcon/> 
 
               <li>All</li>
    
          </ul>
             
    
)

}*/

import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './NavSide.css';

const drawerWidth = 350;

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
  
    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: drawerWidth}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
       
    >
      
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
       subheader={
        <ListSubheader component="div" class="list-subheader">
          Digital Content &amp; Devices
        </ListSubheader>
      }
      >
        {['Amazon Music', 'Kindle E-readers & Books', 'Appstore for Android'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} style= {{'padding': '7.5px'}}/>
              <ListItemIcon>
              <ChevronRightIcon /> 
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={
        <ListSubheader component="div" class="list-subheader">
       Shop By Department
        </ListSubheader>
      }
      >
        {['Electronics', 'Computers', 'Smart Home', 'Arts & Crafts'].map((text, index) => (
          <ListItem button key={text}>
        
            <ListItemText primary={text}  style= {{'padding': '7.5px'}}/>
            <ListItemIcon>
             <ChevronRightIcon /> 
            </ListItemIcon>
          </ListItem>

          
        ))}

        
      </List>
      
    </Box>
  );

  return (
    <div>
      {['All'].map((anchor) => (
        <React.Fragment key={anchor}>

          <ul className='myflex border-h'
          onClick={toggleDrawer(anchor, true)}>
              {/* <MenuIcon style={{fill: "white"}}/>*/}
              <li id='icon-hamburger'></li>
               <li>{anchor}</li></ul>
        
          <SwipeableDrawer

          sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            
        
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
