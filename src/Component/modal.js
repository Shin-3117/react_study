import './modal.css';
import Button from "./button"
import { useState } from 'react';

const Modal = ({children, ...props}) => {
    const [modalOpen, setmodalOpen] = useState(false)
    const showModal = () =>{
        setmodalOpen(!modalOpen);
    }

    return(
<>
<Button onClick={showModal}>modal open</Button>
{modalOpen && 
<div className="modalBackground" onClick={showModal}>
    <div className="modalContainer" 
    // 현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지
    onClick={(e) => e.stopPropagation()}>
        <h3>Modal</h3>
        <p>{children}</p>
        <Button onClick={showModal}>close modal</Button>
    </div>
</div>
}
</>
    )
}

export default Modal;