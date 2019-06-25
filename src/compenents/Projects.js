import React, { useState} from 'react';

import s from '../styles/Projects.module.scss';
import { Title, Bar } from './About';
import { FaCode, FaPlay } from 'react-icons/fa';

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
                demo={'https://schoolmanager03.herokuapp.com/'}
                source={'https://github.com/williamj1788/School-Manager'}
                index={1}
                />
                <Project 
                image={WilliamsPizzaImage}
                title={'Williams Pizza'}
                desc={`Pizzeria website which can
                take orders from customers. It implements a RESTful API on 
                the backend which allows the owner to create, delete, or edit 
                any product or discount at any time. It also makes use of Google's Places 
                and Maps API for easy address finding.`}
                tools={['React', "Node", 'Express', 'MongoDB', 'Scss']}
                demo={'https://williamspizza.herokuapp.com/'}
                source={'https://github.com/williamj1788/Williams-Pizza'}
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
                demo={'https://quezgame.herokuapp.com/'}
                source={'https://github.com/williamj1788/quezGames'}
                index={3}
                />
            </div>
        </section>
    )
}

function Project({ image, title, desc, tools, index, demo, source }) {

    const [isHovering, setIsHovering] = useState(false);

    return(
        <div className={s.project}>
            <div className={`${s.projectImg} wow animated ${index % 2 ? 'slideInLeft' : 'slideInRight'}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <img style={{width: '100%', height: '100%'}} src={image} alt={title} />
                {isHovering && <div className={s.projectLinkContainer}>
                    <a target='_blank' href={demo} className={s.projectLink}><span style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>Demo <FaPlay size={'0.8em'} className={s.projectIcon} /></span></a>
                    <a target='_blank' href={source} className={s.projectLink} style={{marginTop: 40}}>Source <FaCode size={'1em'} className={s.projectIcon}/></a>
                </div>}
            </div>
            <div className={`${s.projectText} wow animated ${index % 2 ? 'slideInRight' : 'slideInLeft'}`}>
                <p className={s.projectTitle}>{title}</p>
                <p className={s.projectDesc}>{desc}</p>
                <p className={s.projectTools}>{tools.join(" - ")}</p>
            </div>
        </div>
    )
}

export default ProjectSection;