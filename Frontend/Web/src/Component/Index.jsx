import React,{useState} from 'react';

import Signup from './Admin/Signup';
import IndexQoute from './Dashboard/Quote/Index';

export default function Index(){        

    const [Item, SetItem] = useState(0);

    const calculateItem = () => {
        
        let defaultItem = 0;
        defaultItem = Item;

        if(defaultItem >= 2){
            SetItem(0);
        }
        else{       
            let nowItem = defaultItem + 1;                 
            SetItem(nowItem);
        }
    }

    return(
        <div className="BodIndex">
            <div className="Pag1">
                <div className="Left">
                    <div className="Group">
                        <IndexQoute Item={Item} />      
                        <div className="BtnPart">
                            <button onClick={calculateItem}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Right">
                    <div className="Group">
                        <Signup />
                    </div>
                </div>
            </div>                        
        </div>
    );
}