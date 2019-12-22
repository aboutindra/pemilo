import React,{useState} from 'react';

export const CntxtStaModal1 = React.createContext({});

export default function Store({children}){

    const [StaModal, SetStaModal] = useState(false);

    return(        
        <CntxtStaModal1.Provider value={[StaModal, SetStaModal]}>
            {children}
        </CntxtStaModal1.Provider>
    )

}
