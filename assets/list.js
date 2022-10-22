//grabbing and assigning form data from local storage

let spouse = document.getElementById("spouse")
let innerSpouse = JSON.parse(localStorage.getItem('MashList0')).join('<br/>');
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
const mash = [
    "Mansion",
    "Apartment",
    "Swamp",
    "House"
]
document.getElementById("mash").innerHTML = mash.join('<br/>');

const categories = Array.from(document.querySelectorAll('.category'));
var nodeDataArr = [];

console.log(categories); //REMOVE!

for (let i = 0; i < categories.length; i++) {
    catNodes = categories[i].childNodes;
    for (let j = 0; j < catNodes.length; j += 2) {
        console.log(catNodes[j].data);
        nodeDataArr.push(catNodes[j].data);
    }
}

console.log(nodeDataArr);

nodeDataArr = nodeDataArr.filter(function(_, i) {
    return (i + 1) % 7; //will eventually replace 7 with `${score}`
});

// let spouseArr = nodeDataArr.find((spouse.childNodes) => {
//     return spouse.childNodes.id == "spouse";
// });
// console.log(spouseArr);
// if (spouseArr.length = 1) {
//     let peopleWinner = spouseArr[0];
// };

console.log(nodeDataArr);


//k = 3
//while(k > 1){}
//use .filter() to select every 7th element in nodeDataArr

//if parentElement.id=univerisity
//use .forEach() with function checkMatch() to match html elements with the filtered elements
//define checkMatch funtion...if html elem == filtered elem, then =>
//use .classList.add('strike') to strike those html elements


//use .map() to transform nodeDataArr to not include selected elements
//use .find() to make remaining element in each category have a class of "'category'-winner"


//spouseArr = spouse.childNodes;
function checkMatch(index, value){
    if (index == value){
        return 
    }
    return 
}
//if ('nodeDataArr[3]' == spouse.childNodes ){
//nodeDataArr[3].classList.add('strike')
//};



//categories => index[i].childNodes => index[0,2,4] to count and => index[0,2,4].data or .nodeValue or textContent to display inside ${}


//LIST
//let fortune = array of all values
//for(var i=0; fortune[i].length; i++){
    //if (fortune[i] != crossed out) {
        //count it
    //}
    //else if (fortune[i] == crossed out) {
        //dont count it
    //}
//}