import React, { Component } from 'react'

const Section = (props) => {
    return(
        <div className="Section-container" style={{height:props.height , ...props.customStyle}}>
            {props.children}
        </div>
    )
}

export default Section