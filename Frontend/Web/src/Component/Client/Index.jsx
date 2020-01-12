import React, {useContext} from 'react';

import ScannerClient from './Scanner';
import ListClient from './List';

import { ChangeClient } from '../../Global/Store';

export default function IndexClient(){
    
    const [StaClient] = useContext(ChangeClient);

    if(StaClient === 0){
        return(<ScannerClient></ScannerClient>)
    }
    else{
        return(<ListClient></ListClient>)
    }

}