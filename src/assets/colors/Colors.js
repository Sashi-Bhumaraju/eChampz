
const GetGameColor = (gameName, opacity) => {
    
    const csgoColor = `rgba(132, 154, 189,${opacity})`;
    const dota2Color = `rgba(233, 73, 59,${opacity})`;
    const fortniteColor = `rgba(126, 209, 237,${opacity})`;
    const volarantColor = `rgba(111, 235, 111,${opacity})`;
    const defaultColor = 'var(--primary)';

    const modifiedGameName = gameName.toLowerCase().replace(/\s/g, '');
    console.log(modifiedGameName)
    switch( modifiedGameName ) {  
        case "csgo": return csgoColor;  
        case "dota2": return dota2Color;  
        case "fortnite": return fortniteColor;   
        case "volarant": return volarantColor;  
        default: { return defaultColor; }
    } 
}

export default GetGameColor;