//Add a button that says Play New Game that clears all the data for a new game

//Allow user to enter information in each form. Use event listeners

const steps = Array.from(document.querySelectorAll('form .step'));
const continueBtn = document.querySelectorAll('form .continue-btn');
const form = document.getElementById('myform');

continueBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep('continue');
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = [];
    form.querySelectorAll('input').forEach(input => {
        const {name, value} = JSON.stringify(input);
        formData.push({name, value});
    });
    console.log(formData);
});


function changeStep(btn) {
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    if(btn === 'continue') {
        index ++;
    } else if(btn !== 'continue') {
    };
    steps[index].classList.add('active');
    console.log(index);
};


// const formData = [];

// const addObj = (e) => {
//     e.preventDefault();
//     let data = {
//         1: document.getElementById('people1').value,
//         2: document.getElementById('people2').value,
//         3: document.getElementById('people3').value
//     };
//     formData.push(data);
//     console.log(formData);
//     localStorage.setItem('MashList1', JSON.stringify(formData));
// }
// document.getElementById('submit-btn').addEventListener('click', addObj);
// localStorage.clear();



// const form = document.getElementById('myform');

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     new FormData(form);
// });

// form.addEventListener("formdata", event => {
//     const formDataObj = event.formData;
//     const entries = [...formDataObj.entries()];
//     console.log(entries);
//     const values = [...formDataObj.values()];
//     console.log(values);
//     sessionStorage.setItem("key", values);
// });

//const arr = sessionStorage.getItem("key") 
//const obj = Object.fromEntries(arr);
//     console.log(obj.values)



// const form = document.getElementById('myform');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formDataObj = [];
//     form.querySelectorAll('input').forEach(input => {
//         const{value} = JSON.stringify(input);
//         formDataObj.push({value});
//     })
//     console.log(formDataObj);
// })


//!!
// const values = JSON.stringify(Object.fromEntries([...formDataObj.values()]));
//!!


// function handleSubmit(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const value = Object.fromEntries(data.entries());
//     console.log({value});
//     sessionStorage.setItem("key", {value});
// }
// const form = document.getElementById('myform');
// form.addEventListener('submit', handleSubmit);


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