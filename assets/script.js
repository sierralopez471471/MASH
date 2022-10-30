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
};

//all form input values are pushed into an array
//then separated out into eight arrays (1 per category) of 3 values 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelectorAll('input').forEach(input => {
        const value = (input.value);
        allInputsArr.push(value);
    });

               
    for (let i = 0; i < allInputsArr.length ; i += 3) {
        let cluster = [
            allInputsArr[i],
            allInputsArr[i+1],
            allInputsArr[i+2]
        ];

        //storing inputs to put inside list.js
        localStorage.setItem(`MashList${i}`, JSON.stringify(cluster));
    }
});


//MINIGAME: TO-DO!
//Allow user to play a mini-game in which they catch hearts, cash, babies, and avoid bombs in an allotted time
//Hearts, cash, and babies earn player 1 point each but bombs earn -2 points
//Keep score, and when time runs out display score
