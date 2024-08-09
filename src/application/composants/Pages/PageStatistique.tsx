import '../Chart/Graph'
import { GraphiqueSommeil1 } from '../Chart/Graph'
import { GraphiqueSommeil2 } from '../Chart/Graph'
import { PopUp } from '../PopUp'

export const GraphStatistique = ()=> {



    return(
        <div className='bg-[#091928]'>
        <GraphiqueSommeil1/>
        <GraphiqueSommeil2/>
        <PopUp/>
        </div>

    )
}