import React from "react";
import FooterItems from "./FooterItems/FooterItems";
import './Footer.css'

const Footer = () => {
    return (
        <div className="flex-footer">
            <div className="flex-footer-item1">
                <FooterItems/>
            </div>
        </div>
    )
};

export default Footer;
