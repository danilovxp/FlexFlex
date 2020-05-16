import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import './Header.css'
import MenuItems from "./Menu/MenuItems/MenuItems";

const Header = () => {
    return (
        <div className="flex-header">
            <div className="flex-header-item1">
                <Logo/>
            </div>
            <div className="flex-header-item2">
                <Menu/>
            </div>
            {/*<div className="flex-header-item3">*/}
            {/*    <MenuItems/>*/}
            {/*</div>*/}
        </div>
    )
};

export default Header;
