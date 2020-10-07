import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {

  return (
    <div>
      <h5 style={{float:"left"}}>NAVBAR</h5>
      <ul style={{float:"right",marginRight:"25px"}}>
        <li style={{display:"inline-block",paddingRight:"25px"}}><Link to="/LeaderDetails">Leader Details - Usestate hooks</Link></li>
        <li style={{display:"inline-block"}}><Link to="/InputForm">Leader Details - Redux</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default Navbar;
