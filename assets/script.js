//Add a button that says Play New Game that clears all the data for a new game

//Allow user to enter information in each form. Use event listeners


let form = document.getElementById('people');

form.addEventListener('submit', callbackFunction);

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
};

//C:\Users\timot\MyProjects\MASH\assets\script.js

// function myFunction() {
//     let fortune = [];

//     for (var i = 0; i < fortune.length; i ++) {
//         document.getElementById(fortune[i].id).addEventListener('onclick')
//     }
// }
//Allow user to play a mini-game in which they catch hearts, cash, babies, and avoid bombs in an allotted time
//Hearts, cash, and babies earn player 1 point each but bombs earn -2 points
//Keep score, and when time runs out display that number to them

//That number will be used to count how many answers to skip over before crossing them out and eliminating them from the fortune

//Stop the elimination of answers in each div after there is only one answer left
//Once there is only one answer left in each div, stop elimination all together and display fortune


//FOR EVERY HTML PAGE AFTER HOMEPAGE
{/* <form method="GET" action="results.html">
            <div>
                <!--required field asterisks and min/max restricitons-->
                <label for="names"> Choose 3 people <span class="required-field">*</span></label>
                <input type="text" id="names" name="names" required minlength="2" maxlength="35"></input> 
            </div>*/}

// function newImage(url){
//   let image = document.createElement('img')
//   image.src = url
//   image.style.position = 'absolute'
//   document.body.append(image)
//   return image
// }
