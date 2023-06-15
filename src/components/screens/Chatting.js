import React, { useEffect } from 'react';
import styles from '../../css/Chatting.module.css';
import data from '../widgets/messages.json';
import { useSelector } from 'react-redux';
import { BiSend } from 'react-icons/bi'


function Chatting () {   

    const user = useSelector((state)=>state.user.data);  
    var prevUid = '';
    const messages = data.map((data,_)=>{
    const sameUserClass = (data.uid === prevUid)? styles.same_user : '';
    prevUid = data.uid;
    const messageClass = (data.uid === user.uid)? styles.sent : styles.received;
    const classes = `${messageClass} ${sameUserClass}`
    const username = (messageClass === styles.received && sameUserClass === '')? <div className={styles.username}>sashi</div> : null
    return <div className={styles.message_container } key={_}>
                <div className={classes}> 
                    {username}
                    {data.text}
                    <div className={styles.time}>{(data.createdAt)}</div>
                </div>    
            </div>   
    })  

    function scrollToBottom() {
        const container = document.getElementById('container');
        container.scrollTop = container.scrollHeight;
    }

    useEffect(()=>{ scrollToBottom() },[])

    return (   
    <div className={styles.chatting} >
        <div className={styles.chatting_container} id='container'> {messages} </div>
        <form className={styles.send_message_container } > 
            <input className={styles.send_message_text_box } placeholder='type message' ></input> 
            <input type='submit' id='send' style={{display:'none'}} />
            <label className={styles.send_message_button } for='send'> <BiSend></BiSend> </label>
        </form>
    </div>    
    )  
}   

export default Chatting;
