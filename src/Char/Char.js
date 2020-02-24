import React from 'react';

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '15px',
        margin: '5px',
        border: '1px solid red',
        textAlign: 'center'
    }

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default Char;
