import { useEffect } from 'react'
import moleImg from '../mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} alt='a mole' src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole