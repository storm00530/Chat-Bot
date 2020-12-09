import React from 'react'
import './LearnOption.css';

const LearningOptions = ( props ) => {
    const options = [
        {text: "JavaScript", handler: props.actionProvider.handleJavascriptList, id:1},
        {text: "PHP", handler: props.actionProvider.handlePhpList, id:2},
        {text: "Vue", handler: props.actionProvider.handleVueList, id:3},
        {text: "Laravel", handler: props.actionProvider.handleLaravelList, id:4},
        {text: "React", handler: props.actionProvider.handleReactList, id:5},
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
