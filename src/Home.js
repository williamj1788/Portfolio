import React from 'react';
import s from './styles/Home.module.scss';

class Home extends React.Component{
    render(){
        return(
            <section className={s.home}>
                <div>
                    <Title>Jacquez Williams</Title>
                    <h2 className={s.fadeIn}>I am a Fast Leaner</h2>
                    <button className={`${s.button} ${s.fadeIn}`}>View My Work</button>
                </div>
            </section>
        )
    }
}

const Title = ({ children }) => {
    return(
        <div className={s.view}>
            <h1 className={s.title}>{children}</h1>
        </div>
    )
}

export default Home;