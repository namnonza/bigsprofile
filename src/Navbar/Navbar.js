import React, { useState } from 'react'
import { Button } from 'antd';


const Navbar = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", marginRight: "auto", width: "100px"}}>
            <Button type="link">home</Button>
            <Button type="link">gallery</Button>
            <Button type="link">contact</Button>
        </div>
    )
}

export default Navbar
