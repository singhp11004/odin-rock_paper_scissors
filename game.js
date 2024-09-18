let userMove=""; 
let computerMove=""; 
let result =""; 
function getComputerMove(){
    const rn=Math.floor(Math.random()*11); // return random from 0 to 10; 

    if(rn<4){
        computerMove="Rock"; 
    }else if(rn<7){
        computerMove="Scissors"; 
    }else{
        computerMove="Paper"; 
    }
    return computerMove; 
}

const selectDiv=document.querySelector(".moveSelect"); 


selectDiv.addEventListener("click",(event)=>{
    if(event.target.tagName==="BUTTON"){

        userMove=event.target.innerText; 
        // console.log(userMove); 
        computerMove = getComputerMove(); 
        switch (userMove){
            case "Rock": 
                switch(computerMove){
                    case "Rock": 
                        result="tie"; 
                        break;
                    case "Scissors": 
                        result="win"; 
                        break; 
                    case "Paper": 
                        result ="loss";
                        break;   
                }
        
                break; 
        
            case "Scissors": 
                switch(computerMove){
                    case "Rock": 
                        result ="loss";
                        break;
                    case "Scissors": 
                        result="tie"; 
                        break; 
                    case "Paper": 
                        result="win"; 
                        break;
                        
                }
                break; 
            case "Paper": 
                switch(computerMove){
                    case "Rock": 
                        result="win"; 
                        break;
                    case "Scissors": 
                        result ="loss";
                        
                        break; 
                    case "Paper": 
                        result="tie"; 
                        
                        break;
                        
                }
        
                break; 
        
        }
        
        console.log(result); 
    }
}); 






