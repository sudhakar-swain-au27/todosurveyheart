import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>
        <CopyrightIcon />
        {new Date().getFullYear()} ToDoList. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
