//Add a button that says Play New Game that clears all the data for a new game

//Allow user to enter information in each form. Use event listeners


const form = document.getElementById('myform');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    new FormData(form);
});

form.addEventListener("formdata", event => {
    const formDataObj = event.formData;
    const entries = [...formDataObj.entries()];
    
    const values = [...formDataObj.values()];
    console.log(values);
    sessionStorage.setItem("key", values);
});


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
// }
// const form = document.getElementById('myform');
// form.addEventListener('submit', handleSubmit);




// function myFunction() {
//     let fortune = [];

//     for (var i = 0; i < fortune.length; i ++) {
//         document.getElementById(fortune[i].id).addEventListener('onclick')
//     }
// }


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