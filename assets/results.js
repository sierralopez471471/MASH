//displays fortune with matching image

if (mash-winner == 'Mansion') {
    document.querySelector('#mash-image').src = 'assets/pics/mansion.png'
}
else if (mash-winner == 'Apartment') {
    document.querySelector('#mash-winner-image').src = 'assets/pics/apartment.png'
}
else if (mash-winner == 'Swamp') {
    document.querySelector('#mash-winner-image').src = 'assets/pics/shreks_swamp.png'
}
else if (mash-winner == 'House') {
    document.querySelector('#mash-winner-image').src = 'assets/pics/house.png'
}

//pulls the answers remaining after the crossout event and gets put into the fortune
document.getElementById("fortune").innerHTML = "You will graduate from <span>${collegeWinner}</span> with a <span>${gpaWinner}</span> GPA. After graduation, you marry <span>${peopleWinner}</span> and settle down in <span>${cityWinner}</span>. Every workday, you commute to and from your job as a(n) <span>${jobWinner}</span> in your very own <span>${carWinner}</span>. You and <span>${peopleWinner}</span> live happily ever after in your <span>${mashWinner}</span> with your <span>${numberWinner}</span> kid(s) and pet <span>${animalWinner}</span>. Enjoy your life!"