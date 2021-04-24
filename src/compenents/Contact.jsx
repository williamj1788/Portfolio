import React, { useState } from 'react';
import s from '../styles/Contact.module.scss';
import top from '../Images/Top.svg';

import { Title, Bar } from './About';

import Github from '../Images/Github_icon.svg';
import Linkedin from '../Images/linkedin-logo.svg';
import Email from '../Images/Email_icon.svg';

function Contact() {
    return (
        <section id='contact' className={s.contact}>
            <img className={s.top} src={top} alt="stuff" />
            <Title>Contact</Title>
            <Bar color="white" />
            <div className={`${s.linkContainer} wow animated fadeInUp`}>
                <a className={s.link} href={'https://github.com/williamj1788'} target='_blank' rel="noopener noreferrer">
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
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState('');

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    async function onSubmit(event) {
        event.preventDefault();

        if (isPending) { return };

        setIsPending(true);

        const resposne = await fetch('https://sm4qmzs0lj.execute-api.us-east-1.amazonaws.com/portfolio/send/email',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(form)
        });

        setIsPending(false);
        setMessage(resposne.status === 200 ? 'Email Sent' : "Internal Server Error. please try again later");
        document.getElementById('contact-form').reset();
    }

    return (
        <form id="contact-form" className={s.contactForm} onSubmit={onSubmit}>
            <div style={{ width: "100%", margin: "20px 0" }}>
                <div>
                    <label htmlFor="name">NameS:</label>
                    <input type="text" id="name" name="name" onChange={onChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={onChange} required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="10" required minLength="20" onChange={onChange} required></textarea>
                </div>
                {message && <span>{message}</span>}
                <button type="submit" className={isPending ? s.disabled : undefined} disabled={isPending}>
                    {isPending && <div className="lds-dual-ring"></div>}
                    {!isPending && <span>Send A Message</span>}
                </button>
            </div>
        </form>
    )
}

export default Contact;