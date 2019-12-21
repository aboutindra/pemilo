import React from 'react';

import Quote from './Quote';

export default function IndexQuote({Item}){ 

    if(Item === 1){
        return(
            <Quote 
                Title="Pemilu = Pemilo.id" 
                Desc="Demokrasi dalam genggaman."
            />
        );
    }
    else if(Item === 0){
        return(
            <Quote 
                Title="Pemilu? Online aja." 
                Desc="Pemilo Memberikan Kemudahan." 
            />
        );
    }
    else if(Item === 2){
        return(
            <Quote 
                Title="Daftar Sekarang!" 
                Desc="Kemudahan ada di genggaman mu." 
            />
        );
    }    

}