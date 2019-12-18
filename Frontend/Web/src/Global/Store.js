import React,{useState} from 'react';

export const Test = React.createContext({});

export default function Store({children}){

    let [count, setCount] = useState(0);

    return(
        <Test.Provider value={{count, setCount}}>
            {children}
        </Test.Provider>
    )

}
