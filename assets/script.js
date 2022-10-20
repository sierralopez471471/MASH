const steps = Array.from(document.querySelectorAll('form .step'));
const continueBtn = document.querySelectorAll('form .continue-btn');
const form = document.getElementById('myform');
const formData = [];
const allInputsArr = [];

//every time a continue button is clicked, changeStep() will be invoked
continueBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep();
    });
});

//changeStep() switches to the next form category by removing and adding the active class in the form divs
//allows a change in aesthetics for user experience while staying in the same html file
function changeStep() {
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    index ++;
    steps[index].classList.add('active');
    console.log(index);
};

//all form input values are pushed into an array
//then separated out into eight arrays (1 per category) of 3 values 
//then pushed into another array
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelectorAll('input').forEach(input => {
        const value = input.value; //toggle JSON.stringify
        allInputsArr.push(value);
    });
    console.log(allInputsArr);
    localStorage.setItem('Mash', JSON.stringify(allInputsArr));
    
    for (let i = 0; i < allInputsArr.length ; i += 3) {
        let cluster = [
            allInputsArr[i],
            allInputsArr[i+1],
            allInputsArr[i+2]
        ];
        formData.push(cluster);
        localStorage.setItem(`MashList${i}`, JSON.stringify(cluster));
    }
    console.log(formData);
    //localStorage.setItem('MashList2', JSON.stringify(formData));
});

//for (let i = 0; i < formData.length; i++) {
//console.log(formData[i]);
//}


//localStorage.setItem('spouse-div', formData[0]);

//localStorage.clear();





//     const obj = Object.fromEntries(formData);
// //     for (let i = 0; i < formData.length; i ++) {
// //         const obj = Object.fromEntries(formData[i]);
// //         console.log(obj);
// //     }
//     console.log(obj);


//take each array and put it inside of mash-items divs




//!!
// const values = JSON.stringify(Object.fromEntries([...formDataObj.values()]));
//!!


// function myFunction() {
//     let fortune = [];

//     for (var i = 0; i < fortune.length; i ++) {
//         document.getElementById(fortune[i].id).addEventListener('onclick')
//     }
// }


//document.write(key[i].value)

//MINIGAME
//Allow user to play a mini-game in which they catch hearts, cash, babies, and avoid bombs in an allotted time
//Hearts, cash, and babies earn player 1 point each but bombs earn -2 points
//Keep score, and when time runs out display that number to them

//LIST
//let fortune = document.querySelectorAll(values);
//for(var i=0; fortune[i].length; i++){
    //if (value !== crossed out) {
        //count it
    //}
    //else if (value !== crossed out) {
        //dont count it
    //}
//}
//That number will be used to count how many answers to skip over before crossing them out and eliminating them from the fortune
//Stop the elimination of answers in each div after there is only one answer left
//Once there is only one answer left in each div, stop elimination all together and display fortune