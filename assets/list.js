let spouse = document.getElementById('spouse')
let innerSpouse = localStorage.getItem('MashList0');
spouse.innerHTML = innerSpouse;

let university = document.getElementById("university");
let innerUniversity = localStorage.getItem("MashList3");
university.innerHTML = innerUniversity;

let pet = document.getElementById("pet");
let innerPet = localStorage.getItem("MashList6");
pet.innerHTML = innerPet;

let vehicle = document.getElementById("vehicle");
let innerVehicle = localStorage.getItem("MashList9");
vehicle.innerHTML = innerVehicle;

let city = document.getElementById("city");
let innerCity = localStorage.getItem("MashList12");
city.innerHTML = innerCity;

let kids = document.getElementById("kids");
let innerKids = localStorage.getItem("MashList15");
kids.innerHTML = innerKids;

let gpa = document.getElementById("grade-point-avg");
let innerGPA = localStorage.getItem("MashList18");
gpa.innerHTML = innerGPA;

let job = document.getElementById("occupation");
let innerJob = localStorage.getItem("MashList21");
job.innerHTML = innerJob;



// function makeUl(array) {
//     var list = document.createElement('ul');
//     for (var i=0; i<=array.length; i++) {
//         var item = document.createElement('li');
//         item.appendChild(document.createTextNode(array[i]));
//         list.appendChild(item);
//     }
//     return list;
//     // console.log(list);
// }
// document.getElementById('spouse').appendChild(makeUl(mash(0));
