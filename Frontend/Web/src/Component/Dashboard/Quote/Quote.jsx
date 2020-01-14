import React from 'react';

export default function Quote({Title, Desc}){
    return(
        <div className="BodQuote">
            <div className="Txt-title">
                <span>{Title}</span>
            </div>
            <div className="Txt-desc">
                <span>{Desc}</span>
            </div>
        </div>
    )
}