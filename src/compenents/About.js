import React from 'react';
import s from '../styles/About.module.scss';

import PropTypes from 'prop-types';

import SpeedIcon from '../Images/speedIcon.jpg';
import InteractiveIcon from '../Images/Interactive_icon.png';
import CleanCodeIcon from '../Images/CleanCodeIcon.png'

class About extends React.Component{

    render(){
        return(
            <section className={s.about}>
                <div className={s.topLeft}></div>
                <div className={s.topRight}></div>
                <div className={s.bottomLeft}></div>
                <div className={s.bottomRight}></div>
                <Title>About</Title>
                <Bar />
                <Summary>I'm an energetic, highly motivated, and hard working programmer that is committed to self-development and building interactive and user-friendly websites.</Summary>
                <div className={s.perkContainer}>
                    <Perk 
                    image={SpeedIcon}
                    title={'Fast'}
                    desc={'Optimize all my websites for a fast and lag-free experience'}
                    alt={'Speed Icon'}
                    animation={'slideInLeft'}
                    />
                    <Perk 
                    image={InteractiveIcon}
                    title={'Interactive'}
                    desc={"Websites don't have to static. I make my sites interactive to improve the overall user experience"}
                    alt={'Interactive Icon'}
                    animation={'slideInUp'}
                    />
                    <Perk 
                    image={CleanCodeIcon}
                    title={'Clean Code'}
                    desc={"Knowing how to write clean code is essential in order to maintain a codebase"}
                    alt={'Clean Code Icon'}
                    animation={'slideInRight'}
                    />
                </div>
            </section>
        )
    }
}

const Title = ({ children }) => {
    return(
        <h2 className={`${s.title} wow animated slideInLeft`}>{children}</h2>
    )
}
Title.prototypes = {
    children: PropTypes.element.isRequired
}

const Bar = () => {
    return(
        <div className={`${s.barWrapper} wow animated slideInRight`}>
            <div className={s.bar}></div>
        </div>
    )
}

const Summary = ({ children }) => {
    return(
        <p className={`${s.summary} wow animated fadeInUp`}>{children}</p>
    )
}
Summary.prototypes = {
    children: PropTypes.element.isRequired
}

const Perk = ({ image, desc, alt, title, animation }) => {
    return(
        <div className={`${s.perk} wow animated ${animation}`}>
            <img src={image} alt={alt} className={s.perkImg} />
            <p className={s.perkTitle}>{title}</p>
            <p className={s.perkDesc}>{desc}</p>
        </div>
    )
}
Perk.prototypes = {
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    animation: PropTypes.string
}

export default About;