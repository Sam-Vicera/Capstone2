
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
    
        const resetButton = document.getElementById("resetButton");
        resetFilters();
        
    //
        filterParks();
    
        stateSelect.addEventListener("change", filterParks);
        parkType.addEventListener("change", filterParks);
        resetButton.addEventListener("click", resetFilters);
        
    })
    
    
    function filterParks(){
        const selectedState = document.getElementById("state-select").value;
        const selectedParkType = document.getElementById("parkType-select").value;
    
        //stateFilter
       parksFilter = nationalParksArray;
     if(selectedState != "Show All"){
        parksFilter = nationalParksArray.filter(s => s.State == selectedState)
        
     }
     //
     if(selectedParkType != "No Preference"){
        parksFilter = parksFilter.filter(s => s.LocationName.includes(selectedParkType))
     }
     
    
        displayParks(parksFilter);
    }
    
    function displayParks(parksFilter) {
    
        const parksContainer = document.querySelector("#content")
        parksContainer.classList.add("text-center");
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
        
    
        
    
        addParkHeader(parksFilter, parkDiv);
         addImageRow(parksFilter, parkDiv);
         addLocationInfo(parksFilter, parkDiv);
         addSeeMoreButton(parksFilter, parkDiv);
    }
    
    function addParkHeader(parksFilter, parkDiv){
        const parkHeaderDiv = document.createElement("div");
        parkDiv.appendChild(parkHeaderDiv);
    
        const parkName = document.createElement("h3");
        parkName.innerText = parksFilter.LocationName;
        parkHeaderDiv.appendChild(parkName);
    
    }
    
    function addImageRow(parksFilter,parkDiv){
        const imageRow = document.createElement("div");
        imageRow.classList.add("park-Photo");
        imageRow.id = "imageStyling"
        parkDiv.appendChild(imageRow);
    
        const img = document.createElement("img");
        img.id = "cardImg"
       
        img.src = "States_Insignias_images/"+ parksFilter.State +".svg.png";

        imageRow.appendChild(img);
    }

    function addLocationInfo(parksFilter, parkDiv){
        const infoRow = document.createElement("div");
        infoRow.classList.add("text-start", "ms-2", "mt-2");
        infoRow.id = "locationInformation"

        parkDiv.appendChild(infoRow);

        let stateNameDisplay = document.createElement("h5");     
        let cityNameDisplay  = document.createElement("h5");      
        let AddressNameDisplay = document.createElement("h5");
        
        stateNameDisplay.innerText =  "State: " + parksFilter.State
        cityNameDisplay.innerText = "City: "+ parksFilter.City
        AddressNameDisplay.innerText = "Address: " +  parksFilter.Address

        infoRow.appendChild(stateNameDisplay);
        infoRow.appendChild(cityNameDisplay);
        infoRow.appendChild(AddressNameDisplay);
    }

    function addSeeMoreButton(parksFilter, parkDiv){
        const buttonRow = document.createElement("div");
        parkDiv.appendChild(buttonRow);

        const seeMoreButton = document.createElement("button")
         seeMoreButton.classList.add("btn", "btn-sm", "btn-danger", "mt-2", "mb-2");
         seeMoreButton.innerText = "Click here for more Info"
         buttonRow.appendChild(seeMoreButton);
    }

  
     function resetFilters() {
            
            document.getElementById("state-select").value = "Show All";
            
            document.getElementById("parkType-select").value = "No Preference";
            
            filterParks();
        }
        
