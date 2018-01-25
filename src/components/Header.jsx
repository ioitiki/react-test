import React from 'react';
import { Link } from 'react-router-dom';
// import helloHippo from '../assets/images/hello-hippo.jpg';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
