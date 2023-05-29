import csgo from './csgo.jpg';
import dota2 from './dota2.jpg';
import fortnite from './fortnite.jpg';
import volarant from './volarant.jpg';

function GetImagesByName (gameName) {
    const imageName = gameName.toLowerCase().replace(/\s/g, '');
     switch(imageName) {
        case 'csgo': return csgo;
        case 'dota2': return dota2;
        case 'fortnite': return fortnite;
        case 'volarant': return volarant;
        default: return 'xxx';
     }
}

export default GetImagesByName;