import React from 'react';
import s from '../styles/Contact.module.scss';
import top from '../Images/Top.svg';

import { Title, Bar } from './About';

import Github from '../Images/Github_icon.svg';
import Linkedin from '../Images/linkedin-logo.svg';
import Email from '../Images/Email_icon.svg';

function Contact() {
    return(
        <section id='contact' className={s.contact}>
            <img className={s.top} src={top} alt="stuff" />
            <Title>Contact</Title>
            <Bar color="white" />
            <div className={`${s.linkContainer} wow animated fadeInUp`}>
                <a className={s.link} href={'https://github.com/williamj1788'}  target='_blank' rel="noopener noreferrer">
                    <img src={Github} alt="Github" width="45px" height="45px" />
                </a>
                <a className={s.link} href={'https://www.linkedin.com/in/jacquez-williams-5a446817a/'} target='_blank' rel="noopener noreferrer">
                    <img src={Linkedin} alt="linkedin" width="45px" height="45px" />
                </a>
                <a className={s.link} href='mailto:jacquezwilliams115@gmail.com'>
                    <img src={Email} alt="Email" width="45px" height="45px" />
                </a>
            </div>
            <Form />
        </section>
    )
}

function Form() {
    return(
        <form className={s.contactForm}>
            <div style={{margin: "20px 0"}}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10" required minLength="20" required></textarea>
                </div>
                <button type="submit">Send A Message</button>
            </div>
        </form>  
    )
}

export default Contact;