
import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'

function LargerOnOver() {
    const [data, changeData] = useState({backgroundColor: "#12818C"})

    const props = useSpring( {
        to: {height: "90px", width: "300px", fontSize: "1.3rem"},
        from: {height: "70px", width: "200px", fontSize: "1rem"},
        config: {weight: 2, tension: 200, friction: 50},
        reset: true
    
    })
    return (
        <>
        <div className='parentDiv'>
        <animated.div style={data} onMouseEnter={() => changeData(props)} onMouseLeave={() => changeData({backgroundColor: "#12818C"})} className='largerDiv'>
            <p>Hover Over me so I expand</p>
        </animated.div>
        </div>
        </>
    )
}
export default (LargerOnOver)