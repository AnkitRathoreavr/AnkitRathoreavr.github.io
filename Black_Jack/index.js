let firstcard=getRandomCard();
let secondcard=getRandomCard();
let cards=[firstcard,secondcard];
let sum=firstcard+secondcard;
let hasblackjack=false;
let isalive=true;
let message=" ";


let  messageEl=document.getElementById("play");
console.log(message);

let  sumEl=document.getElementById("sum-el");
console.log(sumEl);
let  cardEl=document.getElementById("card-el");

function getRandomCard()
{
    return Math.floor(Math.random()*12 + 1);
    
}
function startgame(){
    rendergame();
}

function rendergame(){

    sumEl.textContent="Sum: " + sum;
    cardEl.textContent="Cards: " ;
    for(let i = 0 ; i < cards.length ; i++)
    {
        cardEl.textContent += cards[i] + " ";
    }
    if(sum<=20){
       
        message="Do you want to draw a new card? ";
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack! ";
        hasblackjack=true;
    }
    else{
        message="You're out of the game! ";
        isalive=false;
        br
    }
    messageEl.textContent=message;
    

}

function newcard(){
   let a = getRandomCard();
   sum +=a;
   cards.push(a);
   rendergame();
}


