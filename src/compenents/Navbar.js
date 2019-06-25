import React, { useState, useEffect } from 'react';

import LogoImage from '../Images/Logo.png';

import s from '../styles/Navbar.module.scss';
import { FaDownload } from 'react-icons/fa';


function Navbar(){
    const [isFixed, setIsFixed] = useState(false);
    const [wasFixed, setWasFixed] = useState(false);

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const fixedTarget = 400;

        if(currentScrollY > fixedTarget && !isFixed){
           setIsFixed(true);
           setWasFixed(true);
        }else if(currentScrollY < fixedTarget && isFixed){
            setIsFixed(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // in case of a refresh

        return function(){
            window.removeEventListener('scroll', handleScroll);
        }
    },[isFixed]);


    return(
        <nav className={`${s.navbar} ${isFixed ? s.fixed : !wasFixed ? s.fadeIn : ''}`}>
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