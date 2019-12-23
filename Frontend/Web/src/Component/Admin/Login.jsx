import React from 'react';

import { Link } from 'react-router-dom';

import '../../Resource/App.css';
import '../../Resource/Responsive.css'

export default function Login(){
    return(
        <div className="FrameLog">
            <div className="BodLog">
                
                <div className="Row1">
                    <span>
                        LOGIN
                    </span>
                </div>
                
                <div className="Box">
                    <div className="Group">
                        <div className="Row2">
                            <div className="row1">
                                <span className="txt">
                                    Pemilo Code / Email
                                </span>
                            </div>
                            <div className="row2">
                                <input type="text" className="input" />
                            </div>
                            <div className="row3">
                                <span className="txt">
                                    Password
                                </span>
                            </div>
                            <div className="row4">
                                <input type="password" className="input" />
                            </div>
                        </div>
                        <div className="Row3">
                            <button>
                                Login to Pemilo
                            </button>
                        </div>                    
                    </div>
                </div>
                
                <div className="Row4">
                    <span>
                        Not have account Pemilo? <Link to="/register"> Sign up</Link>
                    </span>                        
                </div>

            </div>
        </div>
    )
}