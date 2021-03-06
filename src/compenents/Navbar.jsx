import React, { useState, useEffect, useContext } from 'react';
import { jumpingContext } from '../App';

import LogoImage from '../Images/Logo.png';
import GitHubSvg from '../Images/Github_icon.svg';
import LinkedinLogoSvg from '../Images/linkedin-logo.svg';

import s from '../styles/Navbar.module.scss';
import { FaDownload } from 'react-icons/fa';
import HamburgerMenu from 'react-hamburger-menu';
import jump from 'jump.js';


function Navbar(){
    const [isFixed, setIsFixed] = useState(false);
    const [isHamburger, setIsHamburger] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const fixedTarget = 600;

        if(currentScrollY > fixedTarget && !isFixed){
           setIsFixed(true);
        }else if(currentScrollY < fixedTarget && isFixed){
            setIsFixed(false);
        }else{
            setIsOpen(false);
        }
    }
    
    function handleResize(){
        const HamburgerTarget = 800;
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
        <nav className={`${s.navbar} ${(isHamburger || isFixed) ? s.dark : ""} ${isFixed ? s.fixed : ''}`}>
            <div className={s.iconContainer}>
                <Logo  visible={isFixed || isHamburger} href="#home" />
                <a className={s.iconLink} href="https://github.com/williamj1788" target='_blank' rel="noopener noreferrer">
                    <img src={GitHubSvg} alt="Github"/>
                </a>
                <a className={s.iconLink} href="https://www.linkedin.com/in/jacquez-williams-5a446817a/" target='_blank' rel="noopener noreferrer">
                    <img src={LinkedinLogoSvg} alt="Linkedin"/>
                </a>
            </div>
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

const Logo = ({ visible, href }) => {
    const { isJumping, setIsJumping } = useContext(jumpingContext);
    function handleClick() {
        if(!isJumping){
            jump(href,{
                callback: () => setIsJumping(false),
            });
            setIsJumping(true);
        }
    }
    return(
        <img className={s.logo} onClick={handleClick} style={{visibility: visible ? "visible" : "hidden"}} src={LogoImage} alt="Logo" />
    )
}

const LinkContainer = ({ hamburger }) => {
    return(
        <div className={`${s.linkContainer} ${hamburger ? s.linkContainerHamburger : ""}`}>
            <Link href='#about'>About</Link>
            <Link href='#projects'>Projects</Link>
            <Link href='#skills'>Skills</Link>
            <Link href='#contact'>Contact</Link>
            <Link Icon={FaDownload} href='Jacquez_Williams_Resume.pdf'>Resume</Link>
        </div>
    )
}

const Link = ({ children, Icon, href, ...props }) => {
    const { isJumping, setIsJumping } = useContext(jumpingContext);
    function handleClick() {
        if(!isJumping){
            jump(href,{
                callback: () => setIsJumping(false),
            });
            setIsJumping(true);
        }
    }
    return(
        <div className={s.linkWrapper} onClick={handleClick}>
            <a data-scroll className={s.link} style={{color: 'white'}} href={href || undefined} {...props}>{children}</a>
            {Icon && <Icon color={'white'} size={20} className={s.icon} />}
        </div>
    )
}

export default Navbar;