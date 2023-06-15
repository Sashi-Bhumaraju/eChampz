import styles from '../../css/Overview.module.css'
import DateTimeFormatter from "../../util/DateTimeFormatter";
import { GetIconByName } from '../../assets/images/GetImagesByName';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Overview () {
   const { tid } = useParams();
   const data = useSelector((state)=> state.tournaments.allDetailedTournaments.get(tid) )
   const cardHeadings = ['Game', 'Team size', 'Prize money','Entry fee',  'Starts', 'Posted at'];
   const cardData = [data.gameName, data.maxTeams, data.prizeMoney,data.entryFee, DateTimeFormatter( data.tournamentTime ), DateTimeFormatter( data.timeOfCreation)];
   const cardIcons = [GetIconByName(data.gameName), GetIconByName('teamsize'), GetIconByName('prizemoney'), GetIconByName('entryfee'), GetIconByName('calender'), GetIconByName('time')]

   const cards = cardData.map((data, index) => {
      return <div className={styles.details_card }>
      <div className={styles.details_card_image} style={{backgroundImage:`url(${cardIcons[index]})`}}></div>
      <div className={styles.details_card_content}>
         <div className={styles.details_card_content_heading }> {cardHeadings[index]} </div>
         <div className={styles.details_card_content_body}> {data} </div>
      </div>
   </div>
   })
   
   return <div className={styles.overview}>
      <div className={styles.details_heading}> Details </div>
      <div className={styles.details_body_space1}>
         {cards}
      </div>
      <div className={styles.details_heading}> Information </div>
      <div  className={styles.details_body_space2}>
            {data.tourneyDetails}
      </div> 
      {/* <div className={styles.details_heading}> Schedule </div>
      <div  className={styles.details_body_space2}>
            {tourneyDetails}
      </div>  */}
      <div className={styles.details_heading}> Settings </div>
      <div  className={styles.details_body_space2}>
            {data.tourneyDetails}
      </div> 
   </div>
}

export default Overview;