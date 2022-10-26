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
const mash = [
    "Mansion",
    "Apartment",
    "Swamp",
    "House"
]

//making arrays for each category
const categories = Array.from(document.querySelectorAll('.category'));
var nodeDataArr = [];
var spouseArr = [];
var universityArr = [];
var petArr = [];
var vehicleArr = [];
var cityArr = [];
var kidsArr = [];
var gpaArr = [];
var jobArr = [];

console.log(categories); //REMOVE!

for (let i = 0; i < categories.length; i++) {
    catNodes = categories[i].childNodes;
    for (let j = 0; j < catNodes.length; j += 2) {
        nodeDataArr.push(catNodes[j].data);
        // console.log(catNodes[j].parentNode.id);
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

document.getElementById('mash').appendChild(makeUL(mash));

//adding strike class to answers of specific index in list
const liArr = Array.from(document.querySelectorAll('li'));

let count = 0;
let start = 4;

function cycleArray() {
    let index = (start + count) % liArr.length;
    liArr[index-1].classList.add('strike');
    console.log(liArr[index-1]);
    

    count+=start;
}
cycleArray();
cycleArray();
cycleArray();
cycleArray();
cycleArray();
cycleArray();
cycleArray();
//setInterval(cycleArray, 2000);

// for (let k = 7; k <= liArr.length; k+=7) {
//     liArr[k-1].classList.add('strike');
//     // liArr[7+7].classList.add('strike');
//     // liArr[7+7+7].classList.add('strike');
//     console.log(k);
//     strike = document.querySelector('.category .li .strike');
//     liArr.push(liArr.splice(liArr.indexOf(strike), 1)[0]);
// }


console.log(liArr)



// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random()*(max-min)+min);
// }

// nodeDataArr = nodeDataArr.filter(function(_, i) {
//      return (i + 1) % (getRandomArbitrary(3, 14)); //will eventually replace 7 with `${score}`
// });
// console.log(nodeDataArr);


// var k = nodeDataArr.length;
// while (k--) {
//     dataArr = nodeDataArr[k];
//     nodeDataArr[k] --;
//     if (dataArr < k) {
//         nodeDataArr.splice(k, 1);
//     }
// }


//use .filter() to select every 7th element in nodeDataArr
//if parentElement.id=univerisity
//use .forEach() with function checkMatch() to match html elements with the filtered elements
//define checkMatch funtion...if html elem == filtered elem, then =>
//use .classList.add('strike') to strike those html elements
//use .map() to transform nodeDataArr to not include selected elements
//use .find() to make remaining element in each category have a class of "'category'-winner"

//if ('nodeDataArr[i]' == spouse.childNodes ){
//nodeDataArr[i].classList.add('strike')
//};


//categories => index[i].childNodes => index[0,2,4] to count and => index[0,2,4].data or .nodeValue or .textContent to display inside ${}


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