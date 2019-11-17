import React, { useState, useEffect, useRef } from 'react';

import s from '../styles/Projects.module.scss';
import { Title, Bar } from './About';
import { FaCode, FaPlay } from 'react-icons/fa';

import WilliamsPizza1 from '../Images/williams_pizza_1.png';
import WilliamsPizza2 from '../Images/williams_pizza_2.png';
import WilliamsPizza3 from '../Images/williams_pizza_3.png';
import WilliamsPizza4 from '../Images/williams_pizza_4.png';
import WilliamsPizza5 from '../Images/williams_pizza_5.png';

import SchoolManager1 from '../Images/school_manager_1.png';
import SchoolManager2 from '../Images/school_manager_2.png';
import SchoolManager3 from '../Images/school_manager_3.png';
import SchoolManager4 from '../Images/school_manager_4.png';

import QuezGames1 from '../Images/quezgames_1.png';
import QuezGames2 from '../Images/quezgames_2.png';
import QuezGames3 from '../Images/quezgames_3.png';
import QuezGames4 from '../Images/quezgames_4.png';
import QuezGames5 from '../Images/quezgames_5.png';

function ProjectSection() {
    return(
        <section className={s.projects} id='projects'>
            <Title>Projects</Title>
            <Bar color={'white'} />
            <div className={s.container}>
                <Project 
                images={[WilliamsPizza1, WilliamsPizza2, WilliamsPizza3, WilliamsPizza4, WilliamsPizza5]}
                title={'Williams Pizza'}
                summary={`Pizzaria website that allows users to order different kinds of pizza and other 
                products. I have implemented an admin account that allows the owner to create, update, 
                and delete products for the site. I also utilized Google's Maps and Places API for better 
                address finding.`}
                challenge={`For a project 
                of this size, there were many new challenges that I had to face. Due to the size of 
                the app, loading times were very long. I also needed to implement better security 
                measures because a hacker could get access to the admin account and do serious damage 
                to the website.`}
                overcome={`I discovered several techniques on how to reduce the loading time of a website. 
                For this project, I utilized image compression, which reduced the loading time of the 
                landing page by 66%. Finally, I learned how to hash passwords and integrated JWTs, which allows 
                for a more scalable and secure website.`}
                tools={['React', "Node", 'Express', 'MongoDB', 'SCSS', 'Google Maps API']}
                demo={'http://williamspizza.ml'}
                source={'https://github.com/williamj1788/Williams-Pizza'}
                animation={'slideInRight'}
                />
                <Project 
                images={[SchoolManager1, SchoolManager2, SchoolManager3, SchoolManager4]}
                title={'School Manager'}
                summary={`Web application that helps students manage their 
                school work. Users can create classes and log future 
                assignments and tests. This allows them to stay organized and 
                never forget upcoming work.`}
                challenge={`This was my first attempt at making a full-stack application. There 
                were a lot of things that I didn't know how to do at first. For instance, I didn't know how
                to connect the back-end to the front-end. Furthermore; I needed to find a way to 
                store user data in a MongoDB database and add authentication so users could access it.`}
                overcome={`By the time I finished the app, I had learned how to make a MERN stack 
                application while also learning how to connect and manage a MongoDB database.`}
                tools={['React', "Node", 'Express', 'MongoDB', 'React Spring']}
                demo={'http://schoolmanager1.ml'}
                source={'https://github.com/williamj1788/School-Manager'}
                animation={'slideInRight'}
                />
                <Project 
                images={[QuezGames1, QuezGames2, QuezGames3, QuezGames4, QuezGames5]}
                title={'QuezGames'}
                summary={`Gaming website that allows you to play up to 4 classic games. 
                It makes use of a third party API to assist with random word 
                generation and implements a dialog tree to provide a more dynamic experience.`}
                challenge={`This was my first react app. In order to complete this project, I needed a 
                better understanding of React and advanced data structures. I also needed to know how 
                to connect to the Word API, which would allow me to retrieve a list of random words.`}
                overcome={`After completing this project, I have improved my react skills and designed a 
                dialog system which allows for a more dynamic narration of the adventure game. Additionally, 
                I learned how to connect to a public API to enhance my app.`}
                tools={['React', 'SCSS' ,'Word API']}
                demo={'https://williamj1788.github.io/quezGames'}
                source={'https://github.com/williamj1788/quezGames'}
                animation={'slideInRight'}
                />
            </div>
        </section>
    )
}

function Project(props) {
    return(
        <div className={s.project}>
            <ProjectImgSection animation={props.animation}>
                {props.images.map((img, i) => <ProjectImg image={img} alt={props.title} key={i} />)}
            </ProjectImgSection>
            <ProjectText {...props} />
        </div>
    )
}

function ProjectImgSection({ animation, children }) {
    const projectEl = useRef(null);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        let hasIntersected = false;
        let inv;

        const observer = new IntersectionObserver(ent => {
            // only want to set the interval once per project
            if(ent[0].isIntersecting && !hasIntersected){
                hasIntersected = true;
                
                inv = setInterval(() => {
                    setIndex(index => index >= children.length - 1 ? 0 : index + 1);
                }, 3000);
            }
        }, {
            threshold: 0.33
        });

        observer.observe(projectEl.current);

        return () => {
            clearInterval(inv);
        }
    }, []);
    return(
        <div ref={projectEl} className={`${s.projectImg} wow animated ${animation}`}>
            <div className={s.projectImgView}>
                <div style={{width: `${(children.length) * 100}%`, right: `${index * 100}%`}}>
                    {children}
                </div>   
            </div>
            <div className={s.selectContainer}>
                {children.map((c, i) => (
                    <button onClick={() => setIndex(i)} className={i === index ? s.active : undefined} key={i} />
                ))}
            </div>
        </div>
    )
}

function ProjectImg({ image, alt }) {
    return(
        <img src={image} alt={alt} />
    )
}

function ProjectText({ title, challenge, summary, overcome, tools, demo, source }) {
    return(
        <div className={s.projectText}>
            <p className={s.projectTitle}>{title}</p>
            <p className={s.projectTools}>{tools.join(" - ")}</p>
            <LinkContainer demo={demo} source={source} />
            <div className="wow animated slideInLeft">
                <p className={s.projectDescTitle}>Summary</p>
                <p className={s.projectDesc}>{summary}</p>
            </div>
            <div className="wow animated slideInRight">
                <p className={s.projectDescTitle}>Challenges I faced</p>
                <p className={s.projectDesc}>{challenge}</p>
            </div>
            <div className="wow animated slideInLeft">
                <p className={s.projectDescTitle}>What I learned</p>
                <p className={s.projectDesc}>{overcome}</p> 
            </div>
        </div>
    )
}

function LinkContainer({ demo, source }) {
    return(
        <div className={s.projectLinkContainer}>
            <a 
            target='_blank' 
            rel="noopener noreferrer" 
            href={demo} 
            className={s.projectLink}>
                <span>Demo<FaPlay size={'0.8em'} className={s.projectIcon} /></span>
            </a>
            <a 
            target='_blank' 
            rel="noopener noreferrer" 
            href={source} 
            className={s.projectLink}>
                <span>Source <FaCode size={'1em'} className={s.projectIcon}/></span>
            </a>
        </div>
    )
}


export default ProjectSection;