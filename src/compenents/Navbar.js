import React, { useState } from 'react';

import LogoImage from '../Images/Logo.png';

import s from '../styles/Navbar.module.scss';
import { FaDownload } from 'react-icons/fa';


function Navbar(){

    const [isFixed, setIsFixed] = useState(false);

    return(
        <nav className={`${s.navbar} ${s.fadeIn}`}>
            <Logo  visible={isFixed} />
            <LinkContainer />
        </nav>
    )
}

const Logo = ({ visible }) => {
    return(
        <img className={s.logo} style={{visibility: visible ? "visible" : "hidden"}} src={LogoImage} alt="Logo" />
    )
}

const LinkContainer = () => {
    return(
        <div className={s.linkContainer}>
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Skills</Link>
            <Link>Contact</Link>
            <Link Icon={FaDownload} href='/Resume.pdf' download='WilliamsResume' >Resume</Link>
        </div>
    )
}

const Link = ({ children, Icon, ...props }) => {
    return(
        <div className={s.linkWrapper}>
            <a className={s.link} {...props}>{children}</a>
            {Icon && <Icon color={'white'} size={20} className={s.icon} />}
        </div>
    )
}

export default Navbar;