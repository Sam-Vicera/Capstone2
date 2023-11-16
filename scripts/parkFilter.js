
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



    displayParks(nationalParksArray);
}