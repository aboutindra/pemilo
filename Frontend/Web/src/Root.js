import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './App';

export default function Root(){
    return(
        <Switch>
            <Route path="/" component={App}></Route>            
        </Switch>
    )
}