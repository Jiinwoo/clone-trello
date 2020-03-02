import React from 'react';
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../assets/logo.svg";

function Header() {
    return (
        <Link to={'/'}>
            <Logo width={200} height={200}/>
        </Link>
    )
}

export default Header