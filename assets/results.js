//displays fortune with matching image

let peopleWinner = localStorage.getItem('peopleWinner');
let collegeWinner = localStorage.getItem('collegeWinner');
let animalWinner = localStorage.getItem('animalWinner');
let cityWinner = localStorage.getItem('cityWinner');
let carWinner = localStorage.getItem('carWinner');
let numberWinner = localStorage.getItem('numberWinner');
let gpaWinner = localStorage.getItem('gpaWinner');
let jobWinner = localStorage.getItem('jobWinner');
let mashWinner = localStorage.getItem('mashWinner');


if (mashWinner == 'Mansion') {
    document.getElementById('mash-winner-img').src='assets/pics/mansion.png'
}
else if (mashWinner == 'Apartment') {
    document.getElementById('mash-winner-img').src='assets/pics/apartment.png'
}
else if (mashWinner == 'Swamp') {
    document.getElementById('mash-winner-img').src='assets/pics/shreks_swamp.png'
}
else if (mashWinner == 'House') {
    document.getElementById('mash-winner-img').src='assets/pics/house.png'
}

//pulls the answers remaining after the crossout event and gets put into the fortune
document.getElementById("fortune").innerHTML = `You graduate from <span>${collegeWinner}</span> with a <span>${gpaWinner}</span> GPA. After graduation, you marry <span>${peopleWinner}</span> and settle down in <span>${cityWinner}</span>. Every workday, you commute to and from your job as a(n) <span>${jobWinner}</span> in your very own <span>${carWinner}</span>. You and <span>${peopleWinner}</span> live happily ever after in your <span>${mashWinner}</span> with your <span>${numberWinner}</span> kid(s) and pet <span>${animalWinner}</span>. Enjoy your life!`