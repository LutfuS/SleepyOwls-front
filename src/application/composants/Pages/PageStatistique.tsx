import '../Chart/Graph'
import { GraphiqueSommeil1 } from '../Chart/Graph'
import { GraphiqueSommeil2 } from '../Chart/Graph'
import { PopUp3 } from '../../../PopUP/PopUp3'


export const GraphStatistique = ()=> {



    return(
        <div className='bg-[#091928]'>
            <PopUp3/>
        <GraphiqueSommeil1/>
        <GraphiqueSommeil2/>
        
        </div>

    )
}