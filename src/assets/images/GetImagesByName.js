import csgo from './csgo.jpg';
import dota2 from './dota2.jpg';
import fortnite from './fortnite.jpg';
import volarant from './volarant.jpg';

function GetImagesByName (gameName) {
    const imageName = gameName.toLowerCase().replace(/\s/g, '');
     switch(imageName) {
        case 'csgo': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/csgo.jpg?alt=media&token=59e64a21-8591-4708-ad77-09b2826fc1c1';
        case 'dota2': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/dota2.jpg?alt=media&token=2a426904-67f6-4a4c-930b-6b7f421c1456';
        case 'fortnite': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/fortnite.jpg?alt=media&token=4d79bf85-ac9b-45ce-b7fe-1b1e0c26533a';
        case 'volarant': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/volarant.jpg?alt=media&token=992e05a8-10d9-4fc5-b0a4-0eb1f943c9ce';
        case 'fee': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/fee.png?alt=media&token=3fd06cc6-a914-4fff-bf53-5722e27723a5';
        case 'fight': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/fight.png?alt=media&token=56d38310-ea0d-4885-a4a5-98dac2da7e81';
        case 'joystick': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/joystick.png?alt=media&token=fceb26c6-edc9-47b8-b101-cbff39559089';
        case 'prize': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/prize.png?alt=media&token=856dfdfa-c887-4a5b-af92-8a4f43640b4e';
        case 'teams': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/teams.png?alt=media&token=c79ed97b-e735-4bab-b578-7542ef62657b';
        case 'start': return 'https://firebasestorage.googleapis.com/v0/b/echampz.appspot.com/o/start.png?alt=media&token=372ea60c-8f48-4546-a55a-7aa45f674b4d';
        default: return 'xxx';
     }
}

export default GetImagesByName;