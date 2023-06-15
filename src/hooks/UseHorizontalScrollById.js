import { useEffect } from "react";

function UseHorizontalScrollById(htmlDocId) {
   useEffect(()=>{
    const container = document.getElementById(htmlDocId);
    container.addEventListener('wheel', function(event) {
        event.preventDefault();
        container.scrollLeft += (event.deltaY );
    });

   },[])
}

export default UseHorizontalScrollById;