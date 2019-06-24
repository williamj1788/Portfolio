import React from 'react';

import s from '../styles/Projects.module.scss';
import { Title, Bar } from './About';

import SchoolManagerImage from '../Images/SchoolManager.png'
import QuezGamesImage from '../Images/QuezGames.png';
import WilliamsPizzaImage from '../Images/WilliamsPizza.png';

function ProjectSection() {
    return(
        <section className={s.projects}>
            <Title>Projects</Title>
            <Bar color={'white'} />
            <p className={`${s.instruction} wow animated fadeInUp`}>Hover or click on the project image for a demo</p>
            <div className={s.container}>
                <Project 
                image={SchoolManagerImage}
                title={'School Manager'}
                desc={`Web application that helps students manage their 
                school work better. Users can create classes and log future 
                assignments and tests. This allows them to stay organize and 
                never forget upcoming work.`}
                tools={['React', "Node", 'Express', 'MongoDB']}
                index={1}
                />
                <Project 
                image={WilliamsPizzaImage}
                title={'Williams Pizza'}
                desc={`Pizzeria website which can
                take orders from customers. It implements a RESTful API on 
                the backend which allows the owner to create, delete, or edit 
                any product or discount at any time. It also makes use of Google's Places 
                and Maps API for easier address finding.`}
                tools={['React', "Node", 'Express', 'MongoDB', 'Scss']}
                index={2}
                />
                <Project 
                image={QuezGamesImage}
                title={'QuezGames'}
                desc={`A gaming website that allows you to play up to 4 classic games. 
                It makes use of a third party API to assist with random word 
                generation for the guessing game and implements a dialog 
                tree to provide a more dynamic experience for the adventure 
                game.`}
                tools={['React', 'Scss' ,'Word API']}
                index={3}
                />
            </div>
        </section>
    )
}

function Project({ image, title, desc, tools, index }) {
    return(
        <div className={s.project}>
            <img className={`${s.projectImg} wow animated ${index % 2 ? 'slideInLeft' : 'slideInRight'}`} src={image} alt={title} />
            <div className={`${s.projectText} wow animated ${index % 2 ? 'slideInRight' : 'slideInLeft'}`}>
                <p className={s.projectTitle}>{title}</p>
                <p className={s.projectDesc}>{desc}</p>
                <p className={s.projectTools}>{tools.join(" - ")}</p>
            </div>
        </div>
    )
}

export default ProjectSection;