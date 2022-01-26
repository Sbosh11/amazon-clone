import React, { Component } from 'react';
import SideDrawer from './NavSide';

import './NavBottom.css';

class BottomNav extends Component {
    render() {
        return (
        
                 <div className='nav-bot'>
                     <SideDrawer/>
                 
                     <ul className='myflex'>
                       <li className="border-h">Today's Deals</li>
                       <li className="border-h">Customer Service</li>
                       <li className="border-h">Registry</li>
                       <li className="border-h">Gift Cards</li>
                       <li className="border-h">Sell</li>
                     </ul>
            </div>
        ) 
    }
}

export default BottomNav;