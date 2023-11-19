
document.addEventListener("DOMContentLoaded",()=>{

    const mountainSelectList = document.getElementById("mountain-select");
     
    const newNameArray = mountainsArray.map(m => m.name);
     

    
    newNameArray.forEach(namesArray => {
       const mountainChoice = new Option(namesArray);
       mountainSelectList.add(mountainChoice);
    } )

   

    mountainSelectList.addEventListener("change", createContainer);
    
    createContainer();
})

function createContainer(){
     let selectedMountain = document.getElementById("mountain-select").value

    if(selectedMountain != "Select your Mountain"){
     
    let selectedMountainArray = mountainsArray.find(mountain => mountain.name == selectedMountain);

    
     displayContent(selectedMountainArray);
    }

}


function displayContent(mountainArray){
    const mountainContainer = document.getElementById("mountainDisplay1");
    mountainContainer.innerText = "";

 mountainContainer.classList.add("w-75");

let rowDiv = document.createElement("div");
rowDiv.classList.add("row");
mountainContainer.appendChild(rowDiv);

let col1 = document.createElement("div");
col1.classList.add("col-5");
col1.classList.add("mt-5");
rowDiv.appendChild(col1);

let infoDiv = document.createElement("div");
col1.appendChild(infoDiv);

let headingDiv = document.createElement("h5");
headingDiv.innerText = mountainArray.name
infoDiv.appendChild(headingDiv);

let paragraph1 = document.createElement("p");
let span1 = document.createElement("span");
span1.innerText = "Elevation: ";
paragraph1.appendChild(span1);
paragraph1.innerText += `${mountainArray.elevation}`
infoDiv.appendChild(paragraph1);



let paragraph2 = document.createElement("p");
let span2 = document.createElement("span");
span2.innerText = "Effort: "
paragraph2.appendChild(span2)
paragraph2.innerText += `${mountainArray.effort}`
infoDiv.appendChild(paragraph2);

let paragraph3 = document.createElement("p");
let span3 = document.createElement("span");
span3.innerText = "Description: ";
paragraph3.appendChild(span3);
paragraph3.innerText += `${mountainArray.desc}`
infoDiv.appendChild(paragraph3);

let paragraph4 = document.createElement("p");
let span4 = document.createElement("span");
span4.innerText = "Coordinates: ";
paragraph4.appendChild(span4);
paragraph4.innerText += ` Latitude: ${mountainArray.coords.lat} Longtitude: ${mountainArray.coords.lng} `
infoDiv.appendChild(paragraph4);



let col2 = document.createElement("div");
col2.classList.add("col");
col2.classList.add("mt-5");
col2.classList.add("ms-5");
rowDiv.appendChild(col2);

let imgDiv = document.createElement("img");
 imgDiv.src = "images/"+ mountainArray.img ;
col2.appendChild(imgDiv);
}