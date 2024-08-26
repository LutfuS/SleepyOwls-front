
import { NoteTaker } from "../../noteApp/compenant/NoteTaker"
import { GraphiqueRecap } from "../Chart/Graph"
import { PopUp2 } from "../../../PopUP/PopUp2"


export const Journal = () => {

    return(
    <div className="bg-[#091928]">
        <PopUp2/>
        <GraphiqueRecap/>
     <NoteTaker/>
    
     </div>
    )
}



