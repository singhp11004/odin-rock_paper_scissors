let userMove=""; 

const selectDiv=document.querySelector(".moveSelect"); 


selectDiv.addEventListener("click",(event)=>{
    if(event.target.tagName==="BUTTON"){

        userMove=event.target.innerText; 
        console.log(userMove); 
    }
}); 


