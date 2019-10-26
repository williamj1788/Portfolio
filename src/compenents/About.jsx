import React from 'react';
import s from '../styles/About.module.scss';

import PropTypes from 'prop-types';

class About extends React.Component{

    render(){
        return(
            <section className={s.about} id='about'>
                <div className={s.topLeft}></div>
                <div className={s.topRight}></div>
                <div className={s.bottomLeft}></div>
                <div className={s.bottomRight}></div>
                <Title>About</Title>
                <Bar />
                <Summary>I'm an energetic, highly motivated, and hard working programmer that is committed to self-development and building interactive and user-friendly websites.</Summary>
            </section>
        )
    }
}

export const Title = ({ children }) => {
    return(
        <h2 className={`${s.title} wow animated slideInLeft`}>{children}</h2>
    )
}
Title.prototypes = {
    children: PropTypes.element.isRequired
}

export const Bar = ({ color = 'black' }) => {
    return(
        <div className={`${s.barWrapper} wow animated slideInRight`}>
            <div className={s.bar} style={{borderColor: color}}></div>
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

const PerkContainer = ({ children }) => {
    return(
        <div className={s.perkContainer}>{children}</div>
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