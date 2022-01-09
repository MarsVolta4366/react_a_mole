import { useState } from "react"
import EmptySlot from "./EmptySlot"
import Mole from "./Mole"

function MoleContainer(props) {

    let [displayMole, setDisplayMole] = useState(false)

    const moleClicked = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    return (
        <div>
            <h1>Mole Container</h1>
            {displayMole ? <Mole/> : <EmptySlot/>}
        </div>
    )
}

export default MoleContainer