import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import Signup from './Admin/Signup';
import IndexQoute from './Dashboard/Quote/Index';
import IndexModal from './Modal/Index';

import { CntxtStaModal1 } from '../Global/Store';

export default function Index(){       

    const [StaModal] = useContext(CntxtStaModal1);

    const [Item, SetItem] = useState(0);

    const hisMove = useHistory();

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

    const move = () => {
        hisMove.push("/admin/rezaxxxx02");
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            calculateItem();
        }, 5000);
        return () => clearInterval(interval);
    });

    return(
        <div className="Parent">
            <IndexModal tipe={"input"} sta={StaModal} config={{title:"Verifikasi Email", txt:"Ketik kode verifikasi yang telah kami kirim ke email kamu.", txtBtn:"Cek Account", place:"Email Code", func:move}} />
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

                <div className="Pag2">
                    
                </div>

            </div>
        </div>
    );
}