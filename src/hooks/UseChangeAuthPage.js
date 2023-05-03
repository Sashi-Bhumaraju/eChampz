import React,{ useState, useEffect } from 'react';

function UseChangeAuthPage (Comp1,Comp2)  {
    const handleChange = (toogler) => {
        toogler? setCurrentComp(<Comp1 tooglePage={handleChange}></Comp1>) : setCurrentComp(<Comp2 tooglePage={handleChange}></Comp2>)
    }
    const [currentComp, setCurrentComp] = useState( <Comp1 tooglePage={handleChange}></Comp1>);
    return [currentComp, setCurrentComp];
}

export default UseChangeAuthPage;