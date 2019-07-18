import React, { Component } from 'react'

const Section = (props) => {
    console.log("test" , props.customClass);
    
    return(
        <div className={"Section-container " + props.customClass} style={{height:props.height , ...props.customStyle}}>
            {props.children}
        </div>
    )
}

export default Section