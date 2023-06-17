import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddTournament from '../popups/AddTournament';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from '../../css/Modal.module.css';


function Modal () {      
    const naviagte = useNavigate()
    const { modalType } = useParams();
    const [ modalComponentName, setModalComponentName] = useState(null);

    const showModal = () => {        
        const modal = document.getElementById("modal-data") 
        modal.close();
        modal.showModal();

    } 

    const closeModal = () => {           
        const modal = document.getElementById("modal-data") 
        // modal.close();  
        naviagte(-1);  
    }   

    var modalComponent = null;

  useEffect(()=>{

    switch(modalType) {
         case 'create-touranament' : modalComponent = <AddTournament/>; setModalComponentName('Create Tournament'); break;
         default: naviagte(-1); return;
    }
    showModal()
  },[])  
  return (
        <dialog id='modal-data'> 
            <div className={styles.modal_bar }>
                <div className={styles  .close_modal_icon } onClick={closeModal}><IoMdArrowRoundBack/></div>
                <div className={styles.modal_name} >{modalComponentName}</div>
            </div>
            {/* <div className='modal-heading'>echampz wants you to login to application</div>
            <div className='modal-buttons'>   
                <div className='modal-no' onClick={closeModal} > Cancel</div>   
                <div className='modal-yes'>Yeah</div>  
            </div> */}

            {modalComponent}
        </dialog>    
    )    
}           

export default Modal;   
       
