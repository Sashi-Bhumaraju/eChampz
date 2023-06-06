import styles from '../../css/Overview.module.css'
import DateTimeFormatter from "../../util/DateTimeFormatter";
import { GetIconByName } from '../../assets/images/GetImagesByName';

function Overview ({gameName,maxTeams, timeOfCreation, tournamentTime, prizeMoney, tourneyDetails  }) {
   const cardHeadings = ['Game', 'Team size', 'Prize money',  'Starts', 'Posted at'];
   const cardData = [gameName, maxTeams, prizeMoney, DateTimeFormatter( tournamentTime ), DateTimeFormatter( timeOfCreation)];
   const cardIcons = [GetIconByName(gameName), GetIconByName('teamsize'), GetIconByName('prizemoney'), GetIconByName('calender'), GetIconByName('time')]

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
   </div>
}

export default Overview;