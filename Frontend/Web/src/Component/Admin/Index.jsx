import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import '../../Resource/App.css';

export default function IndexAdmin(){

    const {email} = useParams();
    const [mail]  = useState(email);    


    return(
        <div className="BodIdxAdmin">
            <div className="row1">
                {mail}
            </div>
            <div className="row2">
                <div className="col1">
                    <div className="box">

                    </div>
                </div>
                <div className="col2">
                    <div className="box">

                    </div>
                </div>
                <div className="col3">
                    <div className="box">

                    </div>
                </div>
            </div>

        </div>
    )
}