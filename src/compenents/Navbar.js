import React from 'react';

import LogoImage from '../Images/Logo.png';

import s from '../styles/Navbar.module.scss';


class Navbar extends React.Component{
    render(){
        return(
            <nav className={`${s.navbar} ${s.fadeIn}`}>
                <Logo />
                <LinkContainer />
            </nav>
        )
    }
}

const Logo = () => {
    return(
        <img className={s.logo} src={LogoImage} alt="Logo" />
    )
}

const LinkContainer = () => {
    return(
        <div className={s.linkContainer}>
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Skills</Link>
            <Link>Contact</Link>
            <Link>Resume</Link>
        </div>
    )
}

const Link = ({ children }) => {
    return(
        <div>
            <a className={s.link}>{children}</a>
        </div>
    )
}

export default Navbar;