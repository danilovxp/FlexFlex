import React from "react";
import ContentItems from "./ContentItems/ContentItems";
import LeftNav from "./LeftNav/LeftNav";
import RightNav from "./RightNav/RightNav";
import './Content.css'

const Content = () => {
    return (
        <div className="flex-content">
            <div className="flex-content-item1">
                <LeftNav/>
            </div>
            <div className="flex-content-item2">
                <ContentItems/>
            </div>
            <div className="flex-content-item3">
                <RightNav/>
            </div>
        </div>
    )
};

export default Content;
