import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'

function ButtonBorder() {
const [data, changeData] = useState({backgroundColor: "white"})
    const props = useSpring({
        to: {width: "8rem", borderWidth: "3px", color: "black"},
        from: {width: "0rem", borderWidth: "3px", color: "black"},
        config: {mass: 4, tension: 150, friction: 50},
        reset: true,

    })

    return (
       <>
       <h3>Underline:</h3>
       <div className='borderLine'>
            <animated.button onMouseLeave={() => 
            changeData({backgroundColor: "white"})} 
            onMouseEnter={() => changeData(props)} className='borderButton'>Click me</animated.button>
            <div className='hrDiv'>
                 <animated.hr style={data}></animated.hr>
            </div>
       </div>
       </>
    )
}

export default (ButtonBorder)