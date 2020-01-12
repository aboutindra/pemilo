import React,{useState} from 'react';

export const CntxtStaModal1 = React.createContext({});
export const ChangeClient = React.createContext({});

export default function Store({children}){

    const [StaModal, SetStaModal] = useState(false);
    const [StaClient, setStaClient] = useState(0);

    return(        
        <ChangeClient.Provider value={[StaClient, setStaClient]}>
            <CntxtStaModal1.Provider value={[StaModal, SetStaModal]}>
                {children}
            </CntxtStaModal1.Provider>
        </ChangeClient.Provider>
    )

}
