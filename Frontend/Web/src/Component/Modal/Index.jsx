import React from 'react';

import Txt from './Txt';

export default function IndexModal({tipe, sta, config}){
    if(tipe === "input"){
        if(sta === true){
            return(
                <Txt config={config} />
            )
        }
        else{
            return null;
        }
    }
}