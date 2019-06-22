import React from 'react';
import s from './styles/Home.module.scss';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words:[
                "A Fast leaner",
                "A Team Player",
                "Motivated"
            ],
            selected: 0,
            toggle: false,
        }
        setTimeout(this.startFlash, 4000);
    };

    incrementSelected = () => {
        this.setState(state => {
            return{
                selected: state.selected + 1 >= state.words.length ? 0 : state.selected + 1,
                toggle: !state.toggle
            }
        });
    }

    startFlash = () => {
        setInterval(this.incrementSelected, 4000);
    }
    
    
    render(){
        return(
            <section className={s.home}>
                <div>
                    <Title>Jacquez Williams</Title>
                    <div className={`${s.fadeIn} ${s.desc}`}>
                        <h2 style={{margin: 0, fontSize: '2rem'}}>I am </h2>
                        <div className={s.textView}>
                            <Text {...this.state} />
                        </div>
                    </div>
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

const Text = ({ words, selected, toggle }) => {
    let previous = selected - 1;
    if(previous < 0){
        previous = words.length + previous;
    }
    let current = selected;
    return(
        <div className={toggle ? s.slideIn1 : s.slideIn2}>
            <p className={s.perks}>{words[current]}</p>
            <p className={s.perks}>{words[previous]}</p>
        </div>
    )
}

export default Home;