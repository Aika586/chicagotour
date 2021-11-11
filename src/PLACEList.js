import React from 'react';
import PLACESSpace from './PLACESSpace';
import './PLACEList.css'



export default function PLACEList() {
    return (
        <div className="PLACEList">
            <PLACESSpace 
            name="Buckingham Fountain"
            address="301 S Columbus DR, Chicago, IL 60605"
            image="buckingham-fountain.png"
                            />
            <PLACESSpace
            name="Chicago River-Walk"
            address="301 S Columbus DR, Chicago, IL 60605"
            image="chicago-riverwalk.jpeg"/>

            <PLACESSpace
            name="Lincoln Zoo"
            address="301 S Columbus DR, Chicago, IL 60605"
            image="lincoln-zoo.jpeg"/>

            <PLACESSpace
            name="Millenuim Park"
            address="301 S Columbus DR, Chicago, IL 60605"
            image="millenium-park.jpeg"/>
            
        </div>
    )
}

