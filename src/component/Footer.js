import React from 'react';

const Footer = (copyright) => {
    return(
        <div>
            <hr/>
            <center>
    <h4>&copy; Shazeb {copyright.year}</h4>
            </center>
        </div>
    )
}

export default Footer;