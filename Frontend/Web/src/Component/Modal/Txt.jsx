import React, {useState, useContext} from 'react'

import '../../Resource/Modal.css';

import { CntxtStaModal1 } from '../../Global/Store';

export default function Txt({config}){

    const [,SetStaModal] = useContext(CntxtStaModal1);

    const [Txt, SetTxt] = useState('');
    
    const FuncDefault = () => {
        (config.func === "") ? console.log("Tidak ada Function") : config.func();
    }

    return(
        <div className="BackModal">
            <span className="ClosedBtn" onClick={()=>{SetStaModal(false)}}>
                x
            </span>
            <div className="ModalTxt">
                <div className="Box">
                    <div className="Group">
                        <div className="Row1">
                            <span className="txt-title">
                                {config.title}
                            </span>
                        </div>
                        
                        <div className="Row2">
                            <span className="txt-desc">
                                {config.txt}
                            </span>
                        </div>

                        <div className="Row3">
                            <input type="text" value={Txt} placeholder={config.place} onChange={(e)=>{SetTxt(e.target.value)}} />
                        </div>

                        <div className="Row4">
                            <button onClick={FuncDefault}>
                                {config.txtBtn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
