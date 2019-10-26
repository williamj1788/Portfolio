import React, { useState, useEffect } from 'react';
import s from '../styles/Home.module.scss';
import PropTypes from 'prop-types';
import ArrowDown from '../Images/arrow-down.png';

function Home(){
    return(
        <section className={s.home} id='home'>
            <div>
                <div className={s.content}>
                    <Title>Jacquez Williams</Title>
                </div>
                <div className={s.desc}>
                    <h2 style={{margin: 0, fontSize: '2rem'}}>I am </h2>
                    <div className={s.textView}>
                        <Text />
                    </div>
                </div>
            </div>
            <img src={ArrowDown} alt="arrow-down"/>
        </section>
    )
}



const Title = ({ children }) => {
    return(
        <div>
            <h1 className={s.title}>{children}</h1>
        </div>
    )
}
Title.prototypes = {
    children: PropTypes.element.isRequired
}

const Text = () => {

    const [words] = useState(["A Front-End Developer", "A Back-End Developer", "A React Developer"]);
    const [index, setIndex] = useState(0);
    const [toggle, setToggle] = useState(0);

    useEffect(() => {
        function startAnimation(){
            setInterval(() => {
                setIndex(i => i + 1 >= words.length ? 0 : i + 1);
                setToggle(t => !t);
            }, 4000);
        }
        setTimeout(startAnimation, 1000)
    }, [words]);

    const previous = index - 1 < 0 ? words.length - 1 : index - 1;
    const current = index;
    return(
        <div className={toggle ? s.slideIn1 : s.slideIn2}>
            <p className={s.perks}>{words[current]}</p>
            <p className={s.perks}>{words[previous]}</p>
        </div>
    )
}

export default Home;