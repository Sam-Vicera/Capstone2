
document.addEventListener("DOMContentLoaded",()=>{

    const mountainSelect = document.getElementById("mountain-select");
     
    let mountainsNameArray = mountainsArray.map(m => m.name);
     

    
    mountainsNameArray.forEach(namesArray => {
       
       const mountainChoice = new Option(namesArray);
       mountainSelect.add(mountainChoice)
    } )

    mountainSelect.addEventListener("change", displayMountains)
})

function displayMountains(){
    const mountainsContainer = document.getElementById("mountainDisplay1");

    mountainsContainer.innerText = "";


}

