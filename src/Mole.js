import { clear } from "@testing-library/user-event/dist/clear"
import { useEffect } from "react"

function Mole(props) {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src="../images/mole.png" onClick={props.moleClicked} />
        </div>
    )
}

export default Mole