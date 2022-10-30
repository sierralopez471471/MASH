//grabbing and assigning form data from local storage

let spouse = document.getElementById("spouse");
let innerSpouse = JSON.parse(localStorage.getItem("MashList0")).join('<br/>');
spouse.innerHTML = innerSpouse;

let university = document.getElementById("university");
let innerUniversity = JSON.parse(localStorage.getItem("MashList3")).join('<br/>');
university.innerHTML = innerUniversity;

let pet = document.getElementById("pet");
let innerPet = JSON.parse(localStorage.getItem("MashList6")).join('<br/>');
pet.innerHTML = innerPet;

let vehicle = document.getElementById("vehicle");
let innerVehicle = JSON.parse(localStorage.getItem("MashList9")).join('<br/>');
vehicle.innerHTML = innerVehicle;

let city = document.getElementById("city");
let innerCity = JSON.parse(localStorage.getItem("MashList12")).join('<br/>');
city.innerHTML = innerCity;

let kids = document.getElementById("kids");
let innerKids = JSON.parse(localStorage.getItem("MashList15")).join('<br/>');
kids.innerHTML = innerKids;

let gpa = document.getElementById("grade-point-avg");
let innerGPA = JSON.parse(localStorage.getItem("MashList18")).join('<br/>');
gpa.innerHTML = innerGPA;

let job = document.getElementById("occupation");
let innerJob = JSON.parse(localStorage.getItem("MashList21")).join('<br/>');
job.innerHTML = innerJob;

//always in mash list
var mashArr = [
    "Mansion",
    "Apartment",
    "Swamp",
    "House"
]

//making arrays for each category
const categories = Array.from(document.querySelectorAll('.category'));
var spouseArr = [];
var universityArr = [];
var petArr = [];
var vehicleArr = [];
var cityArr = [];
var kidsArr = [];
var gpaArr = [];
var jobArr = [];

for (let i = 0; i < categories.length; i++) {
    catNodes = categories[i].childNodes;
    for (let j = 0; j < catNodes.length; j += 2) {
        if (catNodes[j].parentNode.id == 'spouse'){
            spouseArr.push(catNodes[j].data)
        }
        else if (catNodes[j].parentNode.id == 'university'){
            universityArr.push(catNodes[j].data)
        }
        else if (catNodes[j].parentNode.id == 'pet'){
            petArr.push(catNodes[j].data)
        }
        else if (catNodes[j].parentNode.id == 'vehicle'){
            vehicleArr.push(catNodes[j].data)
        }
        else if (catNodes[j].parentNode.id == 'city'){
            cityArr.push(catNodes[j].data)
        }
        else if (catNodes[j].parentNode.id == 'kids'){
            kidsArr.push(catNodes[j].data)
        }
        else if (catNodes[j].parentNode.id == 'grade-point-avg'){
            gpaArr.push(catNodes[j].data)
        }
        else if (catNodes[j].parentNode.id == 'occupation'){
            jobArr.push(catNodes[j].data)
        }
    }
}

//turning arrays into unordered lists of elements
function makeUL(array) {
    var list = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
}

//replacing innerHTML's with new lists
spouse.innerHTML = '';
document.getElementById('spouse').appendChild(makeUL(spouseArr));
university.innerHTML = '';
document.getElementById('university').appendChild(makeUL(universityArr));
pet.innerHTML = '';
document.getElementById('pet').appendChild(makeUL(petArr));
vehicle.innerHTML = '';
document.getElementById('vehicle').appendChild(makeUL(vehicleArr));
city.innerHTML = '';
document.getElementById('city').appendChild(makeUL(cityArr));
kids.innerHTML = '';
document.getElementById('kids').appendChild(makeUL(kidsArr));
gpa.innerHTML = '';
document.getElementById('grade-point-avg').appendChild(makeUL(gpaArr));
job.innerHTML = '';
document.getElementById('occupation').appendChild(makeUL(jobArr));

document.getElementById('mash').appendChild(makeUL(mashArr));

//adding strike class to answers of specific index in list
const liArr = Array.from(document.querySelectorAll('li'));

//since I don't have the minigame yet, I hardcoded the scores into the Array.readItem indexes
Array.prototype.readItem = function(index) {
    let winner = this[index % this.length];
    
    return winner;
}

let count = 0;
let itemsToGoThrough = 3;

function cycleSpouseArray() {
    let start = 0;
    let index = (start + count) % liArr.length;
    let peopleWinner = spouseArr.readItem(5); //will replace with `${score}` 
    localStorage.setItem('peopleWinner', peopleWinner)

    if (liArr[index].innerText !== peopleWinner) {
        liArr[index].classList.add('strike');
    }
    if (liArr[index].innerText == peopleWinner) {
        liArr[index].classList.add('winner');
    }
    count++

    if (count == itemsToGoThrough){
        count = 0;
    }
}

function cycleUniversityArray(){
    let start = 3;
    let index = (start + count) % liArr.length;
    let collegeWinner = universityArr.readItem(4); //will replace with `${score}` 
    localStorage.setItem('collegeWinner', collegeWinner)

    if (liArr[index].innerText !== collegeWinner) {
        liArr[index].classList.add('strike');
    }
    if (liArr[index].innerText == collegeWinner) {
        liArr[index].classList.add('winner');
    }
    count++

    if (count == itemsToGoThrough){
        count = 0;
    }
}

function cyclePetArray(){
    let start = 6;
    let index = (start + count) % liArr.length;
    let animalWinner = petArr.readItem(8); //will replace with `${score}` 
    localStorage.setItem('animalWinner', animalWinner)

    if (liArr[index].innerText !== animalWinner) {
        liArr[index].classList.add('strike');
    }
    if (liArr[index].innerText == animalWinner) {
        liArr[index].classList.add('winner');
    }
    count++

    if (count == itemsToGoThrough){
        count = 0;
    }
}

function cycleVehicleArray(){
    let start = 9;
    let index = (start + count) % liArr.length;
    let carWinner = vehicleArr.readItem(13); //will replace with `${score}` 
    localStorage.setItem('carWinner', carWinner)

    if (liArr[index].innerText !== carWinner) {
        liArr[index].classList.add('strike');
    }
    if (liArr[index].innerText == carWinner) {
        liArr[index].classList.add('winner');
    }
    count++

    if (count == itemsToGoThrough){
        count = 0;
    }
}

function cycleCityArray(){
    let start = 12;
    let index = (start + count) % liArr.length;
    let cityWinner = cityArr.readItem(26); //will replace with `${score}` 
    localStorage.setItem('cityWinner', cityWinner)

    if (liArr[index].innerText !== cityWinner) {
        liArr[index].classList.add('strike');
    }
    if (liArr[index].innerText == cityWinner) {
        liArr[index].classList.add('winner');
    }
    count++

    if (count == itemsToGoThrough){
        count = 0;
    }
}

function cycleKidsArray(){
    let start = 15;
    let index = (start + count) % liArr.length;
    let numberWinner = kidsArr.readItem(34); //will replace with `${score}` 
    localStorage.setItem('numberWinner', numberWinner)

    if (liArr[index].innerText !== numberWinner) {
        liArr[index].classList.add('strike');
    }
    if (liArr[index].innerText == numberWinner) {
        liArr[index].classList.add('winner');
    }
    count++

    if (count == itemsToGoThrough){
        count = 0;
    }
}

function cycleGpaArray(){
    let start = 18;
    let index = (start + count) % liArr.length;
    let gpaWinner = gpaArr.readItem(14); //will replace with `${score}` 
    localStorage.setItem('gpaWinner', gpaWinner)

    if (liArr[index].innerText !== gpaWinner) {
        liArr[index].classList.add('strike');
    }
    if (liArr[index].innerText == gpaWinner) {
        liArr[index].classList.add('winner');
    }
    count++

    if (count == itemsToGoThrough){
        count = 0;
    }
}

function cycleJobArray(){
    let start = 21;
    let index = (start + count) % liArr.length;
    let jobWinner = jobArr.readItem(15); //will replace with `${score}` 
    localStorage.setItem('jobWinner', jobWinner)

    if (liArr[index].innerText !== jobWinner) {
        liArr[index].classList.add('strike');
    }
    if (liArr[index].innerText == jobWinner) {
        liArr[index].classList.add('winner');
    }
    count++

    if (count == itemsToGoThrough){
        count = 0;
    }
}

function cycleMashArray(){
    let start = 24;
    let index = (start + count) % liArr.length;
    let mashWinner = mashArr.readItem(10); //will replace with `${score}` 
    localStorage.setItem('mashWinner', mashWinner)

    if (liArr[index].innerText !== mashWinner) {
        liArr[index].classList.add('strike');
    }
    if (liArr[index].innerText == mashWinner) {
        liArr[index].classList.add('winner');
    }
    count++

    if (count == (itemsToGoThrough+1)){
        count = 0;
    }
}

async function cycleTurns() {
    const peopleWinner = await setInterval(cycleSpouseArray, 500);
    const collegeWinner = await setInterval(cycleUniversityArray, 500);
    const animalWinner = await setInterval(cyclePetArray, 500);
    const carWinner = await setInterval(cycleVehicleArray, 500);
    const cityWinner = await setInterval(cycleCityArray, 500);
    const numberWinner = await setInterval(cycleKidsArray, 500);
    const gpaWinner = await setInterval(cycleGpaArray, 500);
    const jobWinner = await setInterval(cycleJobArray, 500);
}

cycleTurns();
//for some reason when I add cycleMashArray into cycleTurns, every single selection gets crossed out regardless of true/false equality
//so I had to take cycleMashArray out and call it separately four times
cycleMashArray();
cycleMashArray();
cycleMashArray();
cycleMashArray();