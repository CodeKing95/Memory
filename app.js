const cardArray = [
    {
        name:'blank',
        img:'images/Blank.jpg'
    },
    {
        name: 'son',
        img:'images/son.jpg'
    },
    {
        name: 'vegeta',
        img:'images/vegeta.png'
    },
    {
        name: 'piccolo',
        img:'images/piccolo.jpg'
    },
    {
        name: 'krillin',
        img:'images/krillin.png'
    },
    {
        name: 'gohan',
        img:'images/gohan.jpg'
    },
    {
        name: 'freezer',
        img:'images/freezer.jpg'
    },
    {
        name: 'son',
        img:'images/son.jpg'
    },
    {
        name: 'vegeta',
        img:'images/vegeta.png'
    },
    {
        name: 'piccolo',
        img:'images/piccolo.jpg'
    },
    {
        name: 'krillin',
        img:'images/krillin.png'
    },
    {
        name: 'gohan',
        img:'images/gohan.jpg'
    },
    {
        name: 'freezer',
        img:'images/freezer.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/Blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)  
    }
}
createBoard()

function checkMatch(){


    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if(optionOneId == optionTwoId) {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/Blank.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'imgaes/Blank.jpg')
        alert('You have clicked the same image!')
    }
        if(cardsChosen[0] == cardsChosen[1]){
            alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'imgaes/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
  } else{
    cards[optionOneId].setAttribute('src', 'images/Blank.jpg')
    cards[optionTwoId].setAttribute('src', 'images/Blank.jpg')
    alert('Sorry try again!')
  }

    cardsChosen = []
    cardsChosenIds = []

if(cardsWon.length == cardArray.length/2){
    resultDisplay.innerHTML = 'Congratulations you found them all'
}
}
function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
            setTimeout( checkMatch, 500)
    }

}