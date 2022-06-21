import React from 'react';

const Button =  ({text, onClickFn}) => {
    return(<button className="select-pokemon" onClick={onClickFn}>{text}</button>)
}

export default Button;