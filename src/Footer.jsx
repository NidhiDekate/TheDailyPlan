import React from 'react';
import './index.css';

const year = new Date().getFullYear();

function Footer() {
  return (
    <>
    <div className="footer">
        Copyright © {year}
    </div>
    </>
  );
}

export default Footer;