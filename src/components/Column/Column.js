import React from 'react';

function Column(props) {
    return (
        <div style={{
            height:props.height,
            width:props.width,
            backgroundColor:props.backgroundColor
        }}> 
        </div>
    );
}

export default Column;