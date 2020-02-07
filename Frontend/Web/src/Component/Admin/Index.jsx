import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

import '../../Style/App.css';

export default function IndexAdmin(){

  const {email} = useParams();
	const [mail]  = useState(email);    

  if(true){
    return(
      <div>{mail}</div>
    )
  }

}