import React from 'react';   

import QrReader from 'react-qr-reader';
import swal from 'sweetalert';

export default function ScannerClient() {    

    const onError = () => {        
        swal('Opppsss','Just running in mode https or local','error');
    }

    const onScan  = (res) => {
        if(res !== null){
            swal(res.toString());
        }        
    }    

    return(
        <div className="BodScanner">
            <div className="container">
                <div className="box">
                    <div className="group">                    
                        <div className="row1">
                            <QrReader
                                className="scan"
                                onError={onError}
                                onScan={onScan}
                                resolution={100}
                            >
                            </QrReader>
                        </div>
                        <div className="row2">                                                                                    
                            <div className="title">
                                <span>
                                    Scanner
                                </span>
                            </div>
                            <div className="des">
                                <span>
                                    Scan for choose your candidate.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}