const cardsContainer = document.querySelector('.plateau');
const cards = Array.from(document.querySelectorAll('.card'));
let flipCards = ["blue","blue","red","red","pink","pink","purple","purple","turquoise","turquoise","brown","brown"]
let matchCards = 0;


cards.forEach(card => {
    card.addEventListener('click', () => flipCards(card));
    onclick = (flipCards) => {}; 
})

function shuffle(array) {
    for (let i = array.length- 1; i > 0; i--) {
      
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

function randomizeCards() {
    const shuffledCards = shuffle(cards);
    shuffledCards.forEach(card => cardsContainer.appendChild(card));
}
randomizeCards();

// for (let index = cards - 1; index > 0; index--){
//     let j = Math.floor(Math.random() * index);
//     let temp = flipCards[i]; flipCards[i] = flipCards [j]; flipCards[j] = temp  
// }


// function shuffle(cards) {
//    for (const cards = 1; cards < array.length; cards++) {
   
//    }

// }
// function shu(params) {
    
// }