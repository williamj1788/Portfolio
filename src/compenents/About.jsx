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
                <Summary>
                    Hi, I'm Jacquez Williams. I have been passionate about 
                    code since my sophomore year in high school. Since then, 
                    I have been very enthusiastic about learning new and 
                    upcoming technologies. Currently, I spend most of my free 
                    time building interactive and user-friendly web apps.
                </Summary>
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

export default About;