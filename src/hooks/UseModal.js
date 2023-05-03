import React, { useEffect, useState} from 'react';
import Modal from '../components/Modal';

function UseModal (component) {
    const [isOpen, setIsopen] = useState(false);
    const modal = <Modal>{component}</Modal>
    useEffect(()=>{
      isOpen? modal = <Modal>{component}</Modal> : modal = null;
    },[isOpen])
    return [modal,setIsopen];
} 
export default UseModal;