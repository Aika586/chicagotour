import React from 'react';
import PLACESSpace from '../PLACESSpace/PLACESSpace';
import './PLACEList.css'
import data from '../../places-data.json'


export default function PLACEList() {

    const places = data.map(({ title, address, images,hours }, i) => {
  return <PLACESSpace
                    id={i}
                    key={title} 
                    name={title}    
                    address={address} image={images[0]} 
                    hours={hours} />;
});

    return(
    <div className="PLACEList">

        {places}

    </div>

    
    )


}








