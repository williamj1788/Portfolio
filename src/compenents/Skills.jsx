import React from 'react';
import s from '../styles/Skills.module.scss';

import { Title, Bar } from './About';

import Html from '../Images/HtmlLogo.png';
import CSS from '../Images/CssLogo.png';
import SCSS from '../Images/ScssLogo.png';
import Bootstrap from '../Images/bootstrapLogo.png';
import Javascript from '../Images/JSLogo.png';
import ReactImg from '../Images/React.jsLogo.png';
import Node from '../Images/NodeLogo.jpg';
import MongoDB from '../Images/mongodbLogo.jpg';
import Git from '../Images/GitLogo.png';
import Postman from '../Images/PostmanLogo.png';
import Jest from '../Images/JestLogo.png';


function Skills() {
    return(
        <section className={s.skills} id="skills">
            <Title>Skills</Title>
            <Bar />
            <div className={s.container}>
                <Skill img={Html} title={'HTML5'} index={1} />
                <Skill img={CSS} title={'CSS'} index={2} />
                <Skill img={SCSS} title={'SCSS'} index={3} />
                <Skill img={Bootstrap} title={'Bootstrap'} index={4} />
                <Skill img={Javascript} title={'Javascript(ES6+)'} index={5} />
                <Skill img={ReactImg} title={'React.js'} index={6} />
                <Skill img={Node} title={'Node.js'} index={7} />
                <Skill img={MongoDB} title={'MongoDB'} index={8} />
                <Skill img={Git} title={'Git'} index={9} />
                <Skill img={Postman} title={'Postman'} index={10} />
                <Skill img={Jest} title={'Jest'} index={11} />
            </div>
        </section>
    );
}

function Skill({ img, title, index }) {
    return(
        <div className={`${s.skill} ${window.innerWidth > 1000 && 'wow animated flipInY'}`} data-wow-delay={`${index * 200}ms`} data-wow-offset={-300}>
            <img className={s.skillImg} src={img} alt={title} />
            <p className={s.skillText}>{title}</p>
        </div>
    )
}

export default Skills;