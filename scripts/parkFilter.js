
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
        filterParks();
    
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
    
        
    
        addParkHeader(parksFilter, parkDiv);
         addImageRow(parksFilter, parkDiv);
        // addLocationInfo(parksFilter, parkDiv);
        // addSeeMoreButton(parksFilter, parkDiv);
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
        imageRow.classList.add("park-Photo")
        parkDiv.appendChild(imageRow);
    
        const img = document.createElement("img");
       
        img.src = "States_Insignias_images/"+ parksFilter.State +".svg.png"

        imageRow.appendChild(img);
    }

    // function addLocationInfo(parksFilter, parkDiv){
    //     const infoRow = document.createElement("div");
    //     infoRow.classList.add("parkInfo");
    //     parkDiv.appendChild(infoRow);

    //     let stateNameDisplay = parksFilter.State        
    //     let cityNameDisplay  = parksFilter.City      
    //     let AddressNameDisplay =        
    // }