import { createContext, useState } from "react";

export const modalContext=createContext();

const ModalProvider=({children})=>{
    // const[isEditing, setIsEditing]=useState(false);
     const [modalType, setModalType]=useState(null);

    function closeModal(){
        setModalType(null);
    }
    const modalFeatures={
        openModal:setModalType,
        closeModal,
        activeModal:modalType
    }

    return(
        <modalContext.Provider value={modalFeatures}>
{children}
        </modalContext.Provider>
    )
}

export default ModalProvider;