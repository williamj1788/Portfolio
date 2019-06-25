import React, { useState, useEffect } from 'react';

import LogoImage from '../Images/Logo.png';

import s from '../styles/Navbar.module.scss';
import { FaDownload } from 'react-icons/fa';
import HamburgerMenu from 'react-hamburger-menu';


function Navbar(){
    const [isFixed, setIsFixed] = useState(false);
    const [wasFixed, setWasFixed] = useState(false);
    const [isHamburger, setIsHamburger] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const fixedTarget = 600;

        if(currentScrollY > fixedTarget && !isFixed){
           setIsFixed(true);
           setWasFixed(true);
        }else if(currentScrollY < fixedTarget && isFixed){
            setIsFixed(false);
        }else{
            setIsOpen(false);
        }
    }
    
    function handleResize(){
        const HamburgerTarget = 600;
        if(window.innerWidth < HamburgerTarget && !isHamburger){
            setIsHamburger(true);
        }else if(window.innerWidth > HamburgerTarget && isHamburger){
            setIsHamburger(false);
            setIsOpen(false);
        }
    }

    function handleClick(event){
        if(isOpen && event.clientY > 275){
            setIsOpen(false);
        }
    }

    useEffect(() => {
        // in case of a refresh
        handleScroll();
        handleResize();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        window.addEventListener('click', handleClick);

        return function(){
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleClick);
        }
    },[isFixed, isHamburger, isOpen]);


    return(
        <nav className={`${s.navbar} ${isHamburger || isFixed ? s.dark : ""} ${isFixed ? s.fixed : !wasFixed ? s.fadeIn : ''}`}>
            <Logo  visible={isFixed || isHamburger} />
            {isHamburger 
            ?   <div style={{cursor: 'pointer'}}>
                    <HamburgerMenu 
                    color={'#FFFFFF'} 
                    isOpen={isOpen} 
                    menuClicked={() => setIsOpen(!isOpen)} 
                    /> 
                </div>
            : <LinkContainer />}
            {isOpen && <LinkContainer hamburger />}
        </nav>
    )
}

const Logo = ({ visible }) => {
    return(
        <img className={s.logo} style={{visibility: visible ? "visible" : "hidden"}} src={LogoImage} alt="Logo" />
    )
}

const LinkContainer = ({ hamburger }) => {
    return(
        <div className={`${s.linkContainer} ${hamburger ? s.linkContainerHamburger : ""}`}>
            <Link href='#about'>About</Link>
            <Link href='#projects'>Projects</Link>
            <Link href='#skills' >Skills</Link>
            <Link href='#contact'>Contact</Link>
            <Link Icon={FaDownload} href='/Resume.pdf' download='WilliamsResume' >Resume</Link>
        </div>
    )
}

const Link = ({ children, Icon, ...props }) => {
    return(
        <div className={s.linkWrapper}>
            <a data-scroll className={s.link} style={{color: 'white'}} {...props}>{children}</a>
            {Icon && <Icon color={'white'} size={20} className={s.icon} />}
        </div>
    )
}

export default Navbar;