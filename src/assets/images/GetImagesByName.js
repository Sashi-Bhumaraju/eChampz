import csgo from './csgo.png';
import dota2 from './dota2.png';
import fortnite from './fortnite.png';
import volarant from './volarant.png';

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