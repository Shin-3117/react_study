import './accordian.css';
import { useState } from "react"

const Accordian = ({children}) => {
    const [accordianOpen, setAccordianOpen] = useState(false)
    const showAccordian = ()=>{
        setAccordianOpen(!accordianOpen)
    }
    return(
<>
<button onClick={showAccordian}>아코디언</button>
{accordianOpen && 
<div className='accordianChildren'>
{children}
</div>
}
</>
    )
}

export default Accordian