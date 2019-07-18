import React, { useState } from 'react'
import { Button } from 'antd';

const useInnerHTMLInput = (initialState) => {
    const [ inner, setInner ] = useState(initialState)

    const handleChange = (e) => console.log(e.target.inner)

    return [ inner, handleChange ]
}

const Navbar = () => {

    const [current, handleChange] = useInnerHTMLInput("home")

    return (
        <div style={{display: "flex", flexDirection: "column", marginRight: "auto", width: "100px"}}>
            <Button type="link" onClick={handleChange}>home</Button>
            <Button type="link">gallery</Button>
            <Button type="link">contact</Button>
        </div>
    )
}

export default Navbar
