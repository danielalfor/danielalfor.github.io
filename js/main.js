window.onload = function () {
    document
        .querySelector("#tabContainer")
        .addEventListener("click", handleTabClick);
    document.querySelectorAll(".tab")[1].click(); // "click" the first button

    //get ref for button find numbers and add listener and function call
    document.querySelector("#showNumbers").addEventListener("click",showNumbers);

    //get ref for button find numbers Exercise2 and add listener and function call
    let buttonElement2 = document.querySelector("#organizeNumbers").addEventListener("click",organizeNumbers);

    //get reference for button exercise3 and add listener and function call
    let buttonElement3 = document.querySelector("#findKeyValue");
    buttonElement3.addEventListener("click",findKeyValue);

    //get reference for button printStars and add listener and function call
    let buttonElement4 = document.querySelector("#printStars");
    //Add event listener for button
    buttonElement4.addEventListener("click",printStars);

    //get reference for button print Stars perLine and add listener and function call
    let buttonElement5 = document.querySelector("#printStarsLine");
    //Add event listener for button
    buttonElement5.addEventListener("click",printStarsLine);

    //get reference for button getVowels and add listener and function call
    let buttonElement6 = document.querySelector("#getVowels");
    buttonElement6.addEventListener("click",getVowels);
    
    //get reference for button numItems and add listener and function call
    let buttonElement7 = document.querySelector("#numItems");
    buttonElement7.addEventListener("click",calculateShipping);

    //get reference for button calculatePackages
    let buttonElement8 = document.querySelector("#calculatePackage");
    buttonElement8.addEventListener("click",calculatePackage);

    //button 9 convertToDecimal
    document.querySelector("#convertToDecimal").addEventListener("click",convertToDecimal);
    //button 10 checkTriangle
    document.querySelector("#checkTriangle").addEventListener("click",checkTriangle);
                    
};

// (Must declare parameter because we need the mouse click event.)
function handleTabClick(evt) {
    //clears output when clicking from 1 tab to another
    let divElement = document.querySelector("#results");
        divElement.innerHTML = "";
    // format the selected tab
    let tab = evt.target;
    deselectAllTabs();
    tab.classList.add("active");
    console.log('a tab was selected!');

    // reveal the content section with an ID that corresponds to the active tab.
    let id = tab.innerHTML; // eg, Part B
    id = id.replace(" ", "_"); // Part_B
    hideAllSections();
    document.querySelector("#" + id).classList.remove("hidden"); // show #Part_B
}

function deselectAllTabs() {
    let tabs = document.querySelectorAll(".tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
}

function hideAllSections() {
    let sections = document.querySelectorAll(".tabContent");
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add("hidden");
    }
}
//function for tab1
function showNumbers() {
    // 1. Get value from the low number text box.
    // 1a. Get a reference to the element.
    let lowInput = document.querySelector("#lowNumber");
    let lowValueStr = lowInput.value;
    let lowValue = Number(lowValueStr); // Number converts string to number (can also use +)

    // 2. Get value from the high number text box.
    let highValue = +document.querySelector("#highNumber").value;

    // Check that high >= low
    if (highValue >= lowValue) {
        // 3. Loop from low to high:
        //      Add counter to the output string
        let output = lowValue;
        for (let i = lowValue + 1; i <= highValue; i++) {
            output += "<br>" + i;
        }
        //console.log(output);

        // 4. Put the output string in the div.
        let divElement = document.querySelector("#results");
        divElement.innerHTML = "<p>" + output + "</p>";
    } else {
        alert("Low cannot be greater than high.");
    }
}
//function for tab2
function organizeNumbers(){
    //Read values and create an array
    let inputNumbers = document.querySelector("#numbersArray").value;
    let newArray = inputNumbers.split(',');

    //calculate sum of all numbers
    let total = 0;
    for (let i=0; i < newArray.length; i++){
        total += Number(newArray[i]);
    }
    //calculate smallest number
    let minNumber = newArray[0];
    for (let i=0; i < newArray.length; i++)
    {
        if (newArray[i] < minNumber)
        minNumber = newArray[i]; 
    }
    //calculate biggest number
    let maxNumber = newArray[0];
    for (let i=0; i < newArray.length; i++)
    {
        if (newArray[i] > minNumber)
        maxNumber = newArray[i]; 
    }

    //Update output string
    let output = "The number of items is: " + newArray.length;
    output += "<br>Total: " + total;
    output += "<br>Average:" + (total/newArray.length).toFixed(2);
    output += "<br>Smallest :" + minNumber;
    output += "<br>Largest :" + maxNumber;
    
    //put information in the output
    let divElement = document.querySelector("#results");
        divElement.innerHTML = "<p>" + output + "</p>";

}
//function for tab3
function findKeyValue(){
    
    let inputNumbers3 = document.querySelector("#numbersArrayEx3").value;
    let newArrayEx3 = inputNumbers3.split(',');

    let keyNumber = +document.querySelector("#keyNumber").value;
    let keyNumbersFound = 0; 

    for(let i=0; i < newArrayEx3.length; i++)
    {
        if (newArrayEx3[i] == keyNumber)
        keyNumbersFound++;    
    }
    //Update output string
    let output = "Keys found: " + keyNumbersFound;
    //put information in the output
    let divElement = document.querySelector("#results");
        divElement.innerHTML = "<p>" + output + "</p>";

}
//function for tab4
function printStars(){
    let numStars = +document.querySelector("#numStars").value;
    let divElement = document.querySelector("#results");                    
    divElement.innerHTML = "";
    let output = "";

    while(numStars!= 0)
    {
        //alert("*");
        output += " * ";
        numStars--;
    }

    divElement.innerHTML += output;
}
//function for tab5
function printStarsLine(){
    let numStars = +document.querySelector("#numStars1").value;
    let starsPerLine = +document.querySelector("#starsPerLine").value;
    //Clear output
    let divElement = document.querySelector("#results");
    divElement.innerHTML = "";                    
    output = "";
    let counter = 0;
    while(numStars!= 0)
    {
        //alert("*");
        counter++;
        output += " * ";
        numStars--;
        if(counter%starsPerLine == 0)
        output += "<br>";
    }

    divElement.innerHTML += output;
}
//function for tab6
function getVowels(){
//clear output
let divElement = document.querySelector("#results");
divElement.innerHTML = "";            
let phrase = document.querySelector("#phrase").value;
let phraseLower = phrase.toLowerCase();
// create vowels array
const vowels = ["a", "e", "i", "o", "u"]
// create counter
let count = 0;

//for of loop --> checks each character for vowels
for (let letter of phraseLower) {
    if (vowels.includes(letter)) {
        count++;
        }
    }
//loop through the phrase and replace vowels using replace method
for(let i=0; i<phraseLower.length; i++){
for(let k = 0; k < vowels.length; k++){
    phraseLower = phraseLower.replace(vowels[k], "*");    
}
}
//could also replace vowel by vowel, 1 line per vowel
//phraseLower = phraseLower.replace(/a/g, "*");

divElement.innerHTML += "The number of vowels is: " + count;
divElement.innerHTML += "<br> New phrase is :" + phraseLower;
}
//function for tab7
function calculateShipping(){
    //clear output
    let divElement = document.querySelector("#results");
    divElement.innerHTML = "";

    let itemsNumber = +document.querySelector("#itemsToShip").value;
    let price = 0;
    //check range and calculate price
    if(itemsNumber < 100){
        price = itemsNumber*5;
    }
    else if (itemsNumber < 1000){
        price = itemsNumber*4;
    }
    else{
        price = itemsNumber*3;
    }

    let output = "<ul><li>Base cost " + price + "</li>";
    output += "<li>  Tax       " + price*0.15.toFixed(2) + "</li>";
    output += "<li>  Total     " + (price*1.15).toFixed(2) + "</li></ul>";

    divElement = document.querySelector("#results");
    divElement.innerHTML += output;
}
//function for tab8
function calculatePackage(){
    //clear box
    let divElement = document.querySelector("#results");
    divElement.innerHTML = "";

    let barsNumber = +document.querySelector("#numBars").value;
    let numBoxes = 0;
    let numSingles = 0;

    if(barsNumber >= 1){
        numBoxes = Math.floor(barsNumber/24);
        numSingles = barsNumber%24                 
        //alert("Singles" + numSingles);
    }
    else{
        alert("Number of bars should be more than 1");
    }

    let singlesPrice = numSingles*1.75;
    let boxesPrice = numBoxes*32;

    let output = "";
    output += "<ul><li>Number of Boxes: " + numBoxes + "</li>";
    output += "<li>Number of Singles: " + numSingles + "</li>";
    output += "<li>Cost of boxes: " + boxesPrice + "</li>";
    output += "<li>Cost of singles: " + singlesPrice + "</li>";
    output += "<li>Total cost: " +  (boxesPrice + singlesPrice)  + "</li></ul>";

    //let divElement = document.querySelector("#results");
    divElement.innerHTML += output;
}
//function for tab9
function convertToDecimal(){
    //clear box
    let divElement = document.querySelector("#results");
    divElement.innerHTML = "";
    //read binary number    
    let binaryNum = document.querySelector("#binaryNum").value;
    let binaryItems = binaryNum.split("");
    
    let tempNumber = 0;
    let decNumber = 0;
    
    
    let output1 = "";
    let output2 = "";

    for (let j = 0; j < binaryNum.length; j++)
    {
        console.log(j);
        if(binaryItems[j] == '1'){
        tempNumber = Math.pow(2,binaryItems.length -1 -j);           
        decNumber += tempNumber;

        output1 += "2^" + (binaryItems.length -1 -j);
        output2 += tempNumber;
         if(j < binaryNum.length - 2){
            output1 +=" + ";    
            output2 +=" + ";    
         }
         
        }
        //output2 += (Math.pow(2,binaryItems.length -1 -j)).toString + "+";
    }

    divElement.innerHTML += output1 + " = " + output2 + " = " + decNumber;
    
}
//function for tab10
function checkTriangle(){
    let divElement = document.querySelector("#results");
    divElement.innerHTML = "";

    let angle1 = +document.querySelector("#angle1").value;
    console.log(angle1);
    let angle2 = +document.querySelector("#angle2").value;
    console.log(angle2);
    let angle3 = +document.querySelector("#angle3").value;
    console.log(angle3);

    let suma = 0
    suma = (angle1 + angle2 + angle3);
    console.log(suma);
    
    //validate if conditions are met    
    if((suma === 180) && (angle1 > 0 && angle2 > 0 && angle3 > 0) && ((angle1 < 180) && (angle2 < 180) && (angle3 < 180)))
    {
        console.log(angle1);
        console.log(angle2);
        console.log(angle3);
        if (angle1 === 90 || angle2 === 90 || angle3 === 90)
        {
            divElement.innerHTML = "Right Triangle";
        }
        else if (angle1 < 90 && angle2 < 90 && angle3 < 90)
        {
            divElement.innerHTML = "Acute Triangle";
        }
        else if (angle1 > 90 || angle2 > 90 || angle3 > 90){
            divElement.innerHTML = "Obtuse Triangle";}
        
    }
    else
    {
        alert("Error, the sum of angles should be igual to 180");
    }
    
    
}