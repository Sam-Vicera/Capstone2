
document.addEventListener("DOMContentLoaded",()=>{
// finding the state select list & populating with options
    const stateSelect = document.getElementById("state-select");

    locationsArray.forEach(state => {
    const stateOption = new Option (state)
    stateSelect.add(stateOption); 
});
//
// finding parkType select list & populating with options
    const parkType = document.getElementById("parkType-select");

    parkTypesArray.forEach(type => {
        const typeOption = new Option (type)
        parkType.add(typeOption); })
//
    

    stateSelect.addEventListener("change", filterParks)
    parkType.addEventListener("change", filterParks)
})


function filterParks(){
    const selectedState = document.getElementById("state-select").value;
    const selectedParkType = document.getElementById("parkType-select").value;
//stateFilter
 parksFilter = nationalParksArray;
 if(selectedState != "Show All"){
    parksFilter = nationalParksArray.filter(s => s.State == selectedState)
   
 }

    displayParks(parksFilter);
}

function displayParks(parksFilter) {

    const parksContainer = document.querySelector("#content")
    // clear all elements
    parksContainer.innerText = "";

    parksFilter.forEach(parksFilter => {

        displayPark(parksFilter, parksContainer)
        
    });
}

function displayPark(parksFilter, parentDiv){
    const parkDiv = document.createElement("div");
    parkDiv.classList.add("park");
    parkDiv.id = "park-" + parksFilter.LocationID;
    
    parentDiv.appendChild(parkDiv);

    console.log(parkDiv);

    
}