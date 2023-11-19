
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

    console.log(selectedMountainArray);
     displayContent(selectedMountainArray);
    }

    else {
        console.log("Select your Mountain")
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

let col2 = document.createElement("div");
col2.classList.add("col");
col2.classList.add("mt-5");
col2.classList.add("ms-5");
rowDiv.appendChild(col2);

let imgDiv = document.createElement("img");
console.log(mountainArray.name)
 imgDiv.src = "images/"+ mountainArray.img ;
col2.appendChild(imgDiv);
}