const container = document.querySelector(".container");


for (i = 0; i < (16*16); i++) {
    let div = document.createElement("div");
    div.style.border = "0.1px dotted grey";
    div.classList.add("new");

    container.appendChild(div);
};


container.style.display = "grid";
container.style.width = "530px";
container.style.height = "530px";
container.style.gridTemplateColumns = "repeat(16, 1fr)";
container.style.gridTemplateRows = "repeat(16, 1fr)";







let myDivs = document.querySelectorAll(".new");
Array.from(myDivs).forEach(div => div.addEventListener("mouseenter", changeColor));
        function changeColor(e) {
        e.target.style.backgroundColor = "blue";
        };

let colors = document.querySelectorAll(".colors");

Array.from(colors).forEach(color => color.addEventListener("click", selectColor)) ;

function selectColor(event) {
    Array.from(myDivs).forEach(div => div.addEventListener("mouseenter", changeColor));
    function changeColor(e) {
        e.target.style.backgroundColor = event.target.textContent;
    };
};





const button = document.querySelector(".change_button");
button.addEventListener("click", ask);
function ask() {
    let number = prompt("How many squares do you want each side of your grid to have? Pick a number between '10' & '100'.","");

    for (;isNaN(number) || (number > 100) || (number < 10);) {
        if (number == "") {
            break;
        };
        number = prompt("Please enter a number between '10' & '100'. (Only numeric values are accepted.)","");
    };


    if (number >= 10 && number <= 100) {
        Array.from(myDivs);
        for (div of myDivs) {
        container.removeChild(div);
        };

        for (i = 0; i < (number*number); i++) {
            let div = document.createElement("div");
            div.style.border = "0.1px dotted grey";
            div.classList.add("new");
        
            container.appendChild(div);
        };

        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

        myDivs = document.querySelectorAll(".new");
        Array.from(myDivs).forEach(div => div.addEventListener("mouseenter", changeColor));
        function changeColor(e) {
        e.target.style.backgroundColor = "blue";
        };
    };
};



// console.log();


