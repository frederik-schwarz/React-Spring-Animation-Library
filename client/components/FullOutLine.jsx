import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'

function FullOutLine() {
    const [flip, set] = useState(false)
    const {x} = useSpring({
        reset: true,
        reverse: flip,
        from: { x: 0 },
        x: 1,
        delay: 200,
        config: {weight: 1, tension: 50, friction: 50},
        onRest: () => set(!flip),
    })

    return (
        <>
        <animated.svg    
            //style={{ margin: 20, width: 70, height: 90 }}  
            strokeWidth="7"
            fill="red"
            stroke="rgb(45, 55, 71)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={600}
            strokeDashoffset={x.to(x => (1 - x) * 600)}
            
            className='animatedBorderFull' onMouseEnter={() => changeEntered(anim)} onMouseLeave={() => changeEntered({backgroundColor: 'red'})}><rect width='200' height='100'/></animated.svg>
        </> 
    )
}

export default (FullOutLine)