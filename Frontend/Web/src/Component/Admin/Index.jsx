import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import '../../Resource/App.css';

export default function IndexAdmin(){

    let {email} = useParams();
    const [mail] = useState(email);    


    return(
        <div className="Bod_IndexAdmin">
            <p>Hello {mail} </p>
        </div>
    )
}