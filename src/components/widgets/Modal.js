import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Modal () {      
    const naviagte = useNavigate()
    
    const showModal = () => {        
        const modal = document.getElementById("modal-data") 
        modal.showModal()             
    } 

    const closeModal = () => {           
        const modal = document.getElementById("modal-data") 
        // modal.close();  
        naviagte(-1);  
    }   

  useEffect(()=>{
    showModal()
  },[])  
  return (
        <dialog id='modal-data'> 
            <div className='modal-heading'>echampz wants you to login to application</div>
            <div className='modal-buttons'>   
                <div className='modal-no' onClick={closeModal} > Cancel</div>   
                <div className='modal-yes'>Yeah</div>  
            </div>
        </dialog>    
    )    
}           

export default Modal;   
       
