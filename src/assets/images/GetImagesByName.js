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
        default: return 'xxx';
     }
}

export default GetImagesByName;