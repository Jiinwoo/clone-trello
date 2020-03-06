import React from 'react';
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../assets/logo.svg";

function Header() {
    return (
        <header className={"App-header"}>
            <Link to={'/'}>
                <Logo width={200} height={200}/>
            </Link>
        </header>
    )
}

export default Header