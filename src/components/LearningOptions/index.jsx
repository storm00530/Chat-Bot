import React from 'react'
import './LearnOption.css';

const LearningOptions = ( props ) => {
    const options = [
        {text: "JS", handler: ()=>{}, id:1},
        {text: "PHP", handler: ()=>{}, id:2},
        {text: "APIs", handler: ()=>{}, id:3},
        {text: "Laravel", handler: ()=>{}, id:4},
        {text: "React", handler: ()=>{}, id:5},
    ];

    const optionsMarkup = options.map ( ( option ) => (
        <button className = "learning-option-button" 
                key = {option.id}
                onClick = {option.handler} >
          {option.text}
        </button>
    ) )
    return <div className = "learning-options-container">{optionsMarkup} </div>
};

export default LearningOptions
