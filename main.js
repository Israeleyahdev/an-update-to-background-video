document.querySelector('#mortal').addEventListener('click', displayMortal)
document.querySelector('#creed').addEventListener('click', displayCreed)
document.querySelector('#rangers').addEventListener('click', displayRangers)
document.querySelector('#plane').addEventListener('click', displayPlane)
document.querySelector('#car').addEventListener('click', displayCar)
document.querySelector('#christmas').addEventListener('click', displayChristmas)
document.querySelector('#nature').addEventListener('click', displayForest)
document.querySelector('#flower').addEventListener('click', displayFlower)
document.querySelector('#mountain').addEventListener('click', displayMountain)
document.querySelector('#universe').addEventListener('click', displayUniverse)
document.querySelector('#planet').addEventListener('click', displayPlanet)
document.querySelector('#house').addEventListener('click', displayHouse)
document.querySelector('#earth').addEventListener('click', displayEarth)
document.querySelector('#design').addEventListener('click', displayDesign)



function displayMortal() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k2.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayCreed() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k3.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayRangers() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k4.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayPlane() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k5.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayCar() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k6.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayForest() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k11.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayChristmas() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k8.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayFlower() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k9.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayMountain() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k12.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayUniverse() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k13.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayPlanet() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k14.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayHouse() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k15.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayEarth() {
    document.querySelector('body').style.backgroundImage = ' url(img/4k17.jpg)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}
function displayDesign() {
    document.querySelector('body').style.backgroundImage = 'url(img/4k19.png)'
    document.querySelector('body').style.backgroundSize = 'cover'
    document.querySelector('body').style.color = 'white'
}

const Alone = document.querySelector('#alone')
const Beach = document.querySelector('#beach')
const Blish = document.querySelector('#blish')
const Bullfinch = document.querySelector('#bullfinch')
const Dog = document.querySelector('#dog')
const Exercise = document.querySelector('#exercise')
const Forest = document.querySelector('#forest')
const Racing = document.querySelector('#racing')
const Robin = document.querySelector('#robin')
const Sea = document.querySelector('#sea')
const Seoul = document.querySelector('#seoul')
const Street = document.querySelector('#street')
const Sunflowers = document.querySelector('#sunflowers')
const Swans = document.querySelector('#swans')
const Waterfall = document.querySelector('#waterfall')
const Yoga = document.querySelector('#yoga')

document.querySelector('#aloneNext').addEventListener('click', aloneNext)
document.querySelector('#beachNext').addEventListener('click', beachNext)
document.querySelector('#blishNext').addEventListener('click', blishNext)
document.querySelector('#bullfinchNext').addEventListener('click', bullfinchNext)
document.querySelector('#dogNext').addEventListener('click', dogNext)
document.querySelector('#exerciseNext').addEventListener('click', claireNext)
document.querySelector('#forestNext').addEventListener('click', forestNext)
document.querySelector('#racingNext').addEventListener('click', racingNext)
document.querySelector('#robinNext').addEventListener('click', robinNext)
document.querySelector('#seaNext').addEventListener('click', seaNext)
document.querySelector('#seoulNext').addEventListener('click', seoulNext)
document.querySelector('#streetNext').addEventListener('click', streetNext)
document.querySelector('#sunflowersNext').addEventListener('click', sunflowersNext)
document.querySelector('#swansNext').addEventListener('click', swansNext)
document.querySelector('#waterfallNext').addEventListener('click', waterfallNext)
document.querySelector('#yogaNext').addEventListener('click', yogaNext)

function aloneNext() {  
    Beach.classList.add('hidden')
    Blish.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Alone.classList.toggle('hidden')
}
function beachNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.toggle('hidden')
}
function blishNext() { 
    Alone.classList.add('hidden') 
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Blish.classList.toggle('hidden')
}
function bullfinchNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.toggle('hidden')
}
function dogNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Dog.classList.toggle('hidden')
}
function claireNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Exercise.classList.toggle('hidden')
}
function forestNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Forest.classList.toggle('hidden')
}
function racingNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Racing.classList.toggle('hidden')
}
function robinNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Robin.classList.toggle('hidden')
}
function seaNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Sea.classList.toggle('hidden')
}
function seoulNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Seoul.classList.toggle('hidden')
}
function streetNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Street.classList.toggle('hidden')
}
function sunflowersNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Sunflowers.classList.toggle('hidden')
}
function swansNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Swans.classList.toggle('hidden')
}
function waterfallNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Yoga.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Waterfall.classList.toggle('hidden')
}
function yogaNext() { 
    Alone.classList.add('hidden') 
    Blish.classList.add('hidden')
    Dog.classList.add('hidden')
    Exercise.classList.add('hidden')
    Forest.classList.add('hidden')
    Racing.classList.add('hidden')
    Robin.classList.add('hidden')
    Sea.classList.add('hidden')
    Seoul.classList.add('hidden')
    Street.classList.add('hidden')
    Sunflowers.classList.add('hidden')
    Swans.classList.add('hidden')
    Waterfall.classList.add('hidden')
    Beach.classList.add('hidden')
    Bullfinch.classList.add('hidden')
    Yoga.classList.toggle('hidden')
}
const synth = window.speechSynthesis;
document.querySelector('#aloneNext').addEventListener('click', run)
document.querySelector('#beachNext').addEventListener('click', run)
document.querySelector('#blishNext').addEventListener('click', run)
document.querySelector('#bullfinchNext').addEventListener('click', run)
document.querySelector('#dogNext').addEventListener('click', run)
document.querySelector('#exerciseNext').addEventListener('click', run)
document.querySelector('#forestNext').addEventListener('click', run)
document.querySelector('#racingNext').addEventListener('click', run)
document.querySelector('#robinNext').addEventListener('click', run)
document.querySelector('#seaNext').addEventListener('click', run)
document.querySelector('#seoulNext').addEventListener('click', run)
document.querySelector('#streetNext').addEventListener('click', run)
document.querySelector('#sunflowersNext').addEventListener('click', run)
document.querySelector('#swansNext').addEventListener('click', run)
document.querySelector('#waterfallNext').addEventListener('click', run)
document.querySelector('#mortal').addEventListener('click', run)
document.querySelector('#creed').addEventListener('click', run)
document.querySelector('#flower').addEventListener('click', run)
document.querySelector('#forest').addEventListener('click', run)
document.querySelector('#mountain').addEventListener('click', run)
document.querySelector('#car').addEventListener('click', run)
document.querySelector('#house').addEventListener('click', run)

function run() {
    const fText = document.querySelector('#firstText').innerText

    const yellText = `${fText}`
    document.querySelector('#placeToYell').innerText = yellText
    
    let yellThis = new SpeechSynthesisUtterance(yellText);

    synth.speak(yellThis);
}



