const cards = document.querySelectorAll('.memory-card');
let hasFippedCard = false;
let lockBoard = false;
let firstCard,secondCard;

function filpCard(){
    if(lockBoard) return;
    console.log("clicked",this.classList);
    this.classList.add('flip')
    
if(!hasFippedCard){
    //first click
    hasFippedCard = true;
    firstCard = this;
    return;
    console.log({hasFippedCard,firstCard});
}

    //second click
    hasFippedCard = false;
    secondCard = this;
    console.log({hasFippedCard,firstCard});

    // do card match;
    console.log(firstCard.dataset.framework);
    checkForMatch();

    
}

function checkForMatch(){
    console.log(secondCard.dataset.framework);

    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework; isMatch ?  disableCards() : upflipCards();
   

}

function disableCards(){
    firstCard.removeEventListener('click',filpCard)
    secondCard.removeEventListener('click',filpCard)
}
function upflipCards(){
    lockBoard = true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard= false;
       }, 1500)
}
cards.forEach(card=> card.addEventListener('click', filpCard))