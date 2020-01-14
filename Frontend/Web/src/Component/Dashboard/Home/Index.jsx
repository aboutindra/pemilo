import React from "react";
import './../../../Resource/App.css';

import HomeCenter from "./Center";
import HomeLeft from "./Left/Index";
import HomeRight from "./Right/Index";

export default function HomeIndex() {
    return(
        <div className="col-12">
            <div className="row">
                <div className="col-4">
                    <HomeLeft/>
                </div>
                <div className="col-4">
                    <HomeCenter/>
                </div>
                <div className="col-4">
                    <HomeRight/>
                </div>
            </div>
        </div>
    );
}