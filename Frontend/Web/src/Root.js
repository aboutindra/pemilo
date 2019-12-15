import React from 'react';
import {Switch,Route} from 'react-router-dom';

import { Routes } from './Config';

export default function Root(){
    return(
        <Switch>
            {
                Routes.map((route, id)=>(
                    <Route key={id} exact path = {route.path}   component= {route.component} />                    
                ))
            }            
        </Switch>
    );
}