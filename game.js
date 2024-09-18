let userMove=""; 
let computerMove=""; 
let result =""; 
let cScore=0;
let uScore=0; 
const selectDiv=document.querySelector(".moveSelect"); 
const scoreP=document.querySelector(".score-p"); 






function playGame(n){
    for(let i=0; i<n;i++){
        playRound(); 
    }
    let winner=""; 
    if(uScore>cScore){
        winner="You "; 
    }else winner="computer"; 
    scoreP.textContent=`${winner} WON`; 
}






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

        
        console.log(result)



        
        if(result=="win"){
            uScore++; 
        }else if(result=="loss") cScore++; 

        scoreP.textContent=`User Score:${uScore} ---------- Computer Score:${cScore}`; 

        if(uScore==5 || cScore==5){
            let winner=""; 
            if(uScore>cScore){
                winner="You "; 
            }else winner="computer"; 
            scoreP.textContent=`${winner} WON`; 
            uScore=0; 
            cScore=0; 
        }


        
    
    
    
    }
}); 








