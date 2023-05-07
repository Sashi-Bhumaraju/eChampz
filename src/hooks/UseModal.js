import React from 'react';

function UseModal (children) {    
    const showModal = () => {       
        const modal = document.getElementById("modal-data")
        modal.showModal()          
    } 
    const closeModal = () => {          
        const modal = document.getElementById("modal-data")
        modal.close();
    }      
      
   const modalBox = (
        <dialog id='modal-data'> 
        {/* {children} <button onClick={closeModal}>close</button> */}
        <div className='modal-heading'>echampz wants you to login to application</div>
        <div className='modal-buttons'>
            <div className='modal-no' onClick={closeModal} > Cancel</div>
            <div className='modal-yes'>Yeah</div>
        </div>
        </dialog>    
    )    
    return [showModal,modalBox]; 
}           

export default UseModal;   
       
