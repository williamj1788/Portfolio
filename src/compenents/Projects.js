import React, { useState} from 'react';

import s from '../styles/Projects.module.scss';
import { Title, Bar } from './About';
import { FaCode, FaPlay } from 'react-icons/fa';

import SchoolManagerImage from '../Images/SchoolManager.png'
import QuezGamesImage from '../Images/QuezGames.png';
import WilliamsPizzaImage from '../Images/WilliamsPizza.png';

function ProjectSection() {
    return(
        <section className={s.projects} id='projects'>
            <Title>Projects</Title>
            <Bar color={'white'} />
            <p className={`${s.instruction} wow animated fadeInUp`}>Hover or click on the project image for demo and source</p>
            <div className={s.container}>
                <Project 
                image={SchoolManagerImage}
                title={'School Manager'}
                summary={`Web application that helps students manage their 
                school work. Users can create classes and log future 
                assignments and tests. This allows them to stay organize and 
                never forget upcoming work.`}
                challenge={`This was my first attempt at making a full-stack application. There 
                were a lot of things that I didn't know how to do at first. For instance, I didn't know how
                to connect the back-end to the front-end. Furthermore; I needed to find a way to 
                store user data in a MongoDB database and add authentication so users could access it.`}
                overcome={`By the time I finished the app, I had learned how to make a MERN stack 
                application while also learning how to connect and manage a MongoDB database.`}
                tools={['React', "Node", 'Express', 'MongoDB']}
                demo={'https://schoolmanager03.herokuapp.com/'}
                source={'https://github.com/williamj1788/School-Manager'}
                index={1}
                />
                <Project 
                image={WilliamsPizzaImage}
                title={'Williams Pizza'}
                summary={`Pizzeria website which can
                take orders from customers. It implements a RESTful API on 
                the backend which allows the owner to create, delete, or edit 
                any product or discount at any time. It also makes use of Google's Places 
                and Maps API for easy address finding.`}
                challenge={`This is the most comprehensive app that I have ever built. For a project 
                of this size, there were many new challenges that I had to face. Due to the size of 
                the app, loading times were very long. I also needed to implement better security 
                measures because a hacker could get access to the admin account and do serious damage 
                to the website.`}
                overcome={`I discovered several techniques on how to reduce the loading time of a website. 
                For this project, I utilized image compression, which reduced the loading time of the 
                app by 66%. Finally, I learned how to hash passwords and integrated JWTs, which allows 
                for a more scalable and secure website.`}
                tools={['React', "Node", 'Express', 'MongoDB', 'SCSS']}
                demo={'https://williamspizza.herokuapp.com/'}
                source={'https://github.com/williamj1788/Williams-Pizza'}
                index={2}
                />
                <Project 
                image={QuezGamesImage}
                title={'QuezGames'}
                summary={`Gaming website that allows you to play up to 4 classic games. 
                It makes use of a third party API to assist with random word 
                generation and implements a dialog 
                tree to provide a more dynamic experience.`}
                challenge={`This was my first react app. In order to complete this project, I needed a 
                better understanding of React and advanced data structures. I also needed to know how 
                to connect to the Word API, which would allow me to retrieve a list of random words.`}
                overcome={`After completing this project, I have improved my react skills and designed a 
                dialog system which allows for a more dynamic narration of the adventure game. Additionally, 
                I learned how to connect to a public API to enhance my app.`}
                tools={['React', 'SCSS' ,'Word API']}
                demo={'https://quezgame.herokuapp.com/'}
                source={'https://github.com/williamj1788/quezGames'}
                index={3}
                />
            </div>
        </section>
    )
}

function Project({ image, title, challenge ,summary, overcome ,tools, index, demo, source }) {
    const [isHovering, setIsHovering] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [timer, setTimer] = useState(null);

    function handleMouseEnter() {
        setIsHovering(true);
        setTimer(setTimeout(() => setIsActive(true), 1300));
    }

    function handleMouseLeave() {
        setIsHovering(false);
        setIsActive(false);
        clearTimeout(timer);
    }

    return(
        <div className={s.project}>
            <ProjectImgSection
            index={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <ProjectImg image={image} alt={title} />
                {isHovering && <LinkContainer isActive={isActive} demo={demo} source={source} />}
            </ProjectImgSection>
            <ProjectText 
            index={index}
            title={title}
            challenge={challenge}
            overcome={overcome}
            summary={summary}
            tools={tools}
            />
        </div>
    )
}

function ProjectImgSection({ index, onMouseEnter, onMouseLeave, children }) {
    return(
        <div className={`${s.projectImg} wow animated ${index % 2 ? 'slideInLeft' : 'slideInRight'}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</div>
    )
}

function ProjectImg({ image, alt }) {
    return(
        <img style={{width: '100%', height: '100%'}} src={image} alt={alt} />
    )
}

function LinkContainer({ isActive, demo, source }) {
    return(
        <div className={s.projectLinkContainer}>
            <a target='_blank' rel="noopener noreferrer" href={isActive ? demo : undefined} className={s.projectLink}><span style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>Demo <FaPlay size={'0.8em'} className={s.projectIcon} /></span></a>
            <a target='_blank' rel="noopener noreferrer" href={isActive ? source : undefined} className={s.projectLink} style={{marginTop: 40}}>Source <FaCode size={'1em'} className={s.projectIcon}/></a>
        </div>
    )
}

function ProjectText({ index, title, challenge, summary, overcome, tools }) {
    return(
        <div className={`${s.projectText} wow animated ${index % 2 ? 'slideInRight' : 'slideInLeft'}`}>
            <p className={s.projectTitle}>{title}</p>
            <p className={s.projectDescTitle}>Summary</p>
            <p className={s.projectDesc}>{summary}</p>
            <p className={s.projectDescTitle}>Challenges I faced</p>
            <p className={s.projectDesc}>{challenge}</p>
            <p className={s.projectDescTitle}>What I learned</p>
            <p className={s.projectDesc}>{overcome}</p>
            <p className={s.projectTools}>{tools.join(" - ")}</p>
        </div>
    )
}



export default ProjectSection;