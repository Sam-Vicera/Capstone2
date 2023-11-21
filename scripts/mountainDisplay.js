
document.addEventListener("DOMContentLoaded",()=>{

    const mountainSelectList = document.getElementById("mountain-select");
     
    const newNameArray = mountainsArray.map(m => m.name);
     

    
    newNameArray.forEach(namesArray => {
       const mountainChoice = new Option(namesArray);
       mountainSelectList.add(mountainChoice);
    } )

    const checkbox = document.getElementById("checkbox");

    mountainSelectList.addEventListener("change", createContainer);

    checkbox.addEventListener("change",() => {
        if (checkbox.checked) {
            // If checkbox is checked
            createDuplicatedSelectForm(newNameArray);
          } else {
            // If checkbox is unchecked
            removeDuplicatedSelectForm();
          }
    })
    
})

function createContainer(){
     let selectedMountain = document.getElementById("mountain-select").value
     
     const mountainContainer = document.getElementById("mountainDisplay1");
     mountainContainer.innerText = "";
     mountainContainer.classList.add("w-75");


    if(selectedMountain != "Select your Mountain"){
        
    let selectedMountainArray = mountainsArray.find(mountain => mountain.name == selectedMountain);
     displayContent(mountainContainer,selectedMountainArray);
     mountainContainer.hidden = false;
    }
   else{
    mountainContainer.hidden = true;
   }
}


function displayContent(parentDiv, mountainArray){
    
    let rowDiv = document.createElement("div");
rowDiv.classList.add("row");
parentDiv.appendChild(rowDiv);

let col1 = document.createElement("div");
col1.classList.add("col-sm-12", "col-md-5", "mt-5");
rowDiv.appendChild(col1);

let infoDiv = document.createElement("div");
col1.appendChild(infoDiv);

let headingDiv = document.createElement("h5");
headingDiv.innerText = mountainArray.name
infoDiv.appendChild(headingDiv);

let paragraph1 = document.createElement("p");
let span1 = document.createElement("span");
paragraph1.classList.add("spanDecoration");
span1.innerText = "Elevation: ";
paragraph1.appendChild(span1);
paragraph1.innerText += `${mountainArray.elevation}`
infoDiv.appendChild(paragraph1);



let paragraph2 = document.createElement("p");
let span2 = document.createElement("span");
paragraph2.classList.add("spanDecoration");
span2.innerText = "Effort: "
paragraph2.appendChild(span2)
paragraph2.innerText += `${mountainArray.effort}`
infoDiv.appendChild(paragraph2);

let paragraph3 = document.createElement("p");
let span3 = document.createElement("span");
paragraph3.classList.add("spanDecoration");
span3.innerText = "Description: ";
paragraph3.appendChild(span3);
paragraph3.innerText += `${mountainArray.desc}`
infoDiv.appendChild(paragraph3);

let paragraph4 = document.createElement("p");
let span4 = document.createElement("span");
paragraph4.classList.add("spanDecoration");
span4.innerText = "Coordinates: ";
paragraph4.appendChild(span4);
paragraph4.innerText += ` Latitude: ${mountainArray.coords.lat} Longtitude: ${mountainArray.coords.lng} `
infoDiv.appendChild(paragraph4);



let col2 = document.createElement("div");
col2.classList.add("col-sm-12" ,"col-md-6");
col2.id = "col2Responsiveness"
rowDiv.appendChild(col2);

let imgDiv = document.createElement("img");
imgDiv.classList.add("imgDisplay", "img-fluid", "mt-2")
 imgDiv.src = "images/"+ mountainArray.img ;
col2.appendChild(imgDiv);
}

function createDuplicatedSelectForm(newNameArray) {
    const parentSelectDiv = document.getElementById("firstSelectDiv");
  
    if (!document.getElementById("duplicatedSelectContainer")) {
        
        const duplicatedSelectContainer = document.createElement("div");
        duplicatedSelectContainer.id = "duplicatedSelectContainer";
        parentSelectDiv.appendChild(duplicatedSelectContainer);
  
       
        const labelForNewForm = document.createElement("label");
        labelForNewForm.for = "duplicatedSelectForm";
        labelForNewForm.innerText = "Choose your other Mountain";
        labelForNewForm.id = "newLabel"
        
        
        duplicatedSelectContainer.appendChild(labelForNewForm);
  
        const duplicatedSelectForm = document.createElement("select");
        duplicatedSelectForm.id = "duplicatedSelectForm";
        duplicatedSelectForm.classList.add("form-select");
        
        
        duplicatedSelectContainer.appendChild(duplicatedSelectForm);
  
        newNameArray.forEach((namesArray) => {
          const mountainChoice = new Option(namesArray);
          duplicatedSelectForm.add(mountainChoice);
        });
      }
  }
  
    
    

function removeDuplicatedSelectForm() {
  const duplicatedSelectForm = document.getElementById("duplicatedSelectForm");

  if (duplicatedSelectForm) {
    duplicatedSelectForm.remove();

    const labelForNewForm = document.getElementById("newLabel")

    
  }
  
}