// Write your JavaScript code here!

window.addEventListener("load", function(){
//____________________________________________
//alert("Hello World");
   //--------------------------------------------------------
   function notReady() {
      document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
      document.getElementById("launchStatus").style.color = 'red';
      document.getElementById("faultyItems").style.visibility = 'visible';
   }
   function isReady() {
      document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
      document.getElementById("launchStatus").style.color = 'green';
      fuel.textContent = "Fuel level is high enough for launch";
      cargo.textContent = "Cargo mass is low enough for launch";
      document.getElementById("faultyItems").style.visibility = 'visible';
   }
   //--------------------------------------------------------
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let fuel = document.getElementById('fuelStatus');
      let cargo = document.getElementById('cargoStatus'); 
   //*******************************************************
   const form = document.querySelector('form');
   form.addEventListener('submit', function(event) {  
   //*******************************************************
      const pilotName = document.querySelector('input[name="pilotName"]');
      const copilotName = document.querySelector('input[name="copilotName"]');
      const fuelLevel = document.querySelector('input[name="fuelLevel"]');
      const cargoMass = document.querySelector('input[name="cargoMass"]');
   //-------------------------------------------------------- 

   if (pilotName.value === "" || copilotName.value === "") {
      alert("Pilot and Co-pilot names are required!");
      notReady();
      event.preventDefault();
   } else if (fuelLevel.value < 10000) {
      alert("Fuel level is too low!");
      notReady();
      fuel.textContent = "Fuel level is too low!";
      event.preventDefault();
   } else if (cargoMass.value > 10000){
      alert("Cargo mass is too high!");
      notReady();
      cargo.textContent = "Cargo mass is too high!";
      event.preventDefault();
   } else {
      pilotStatus.textContent = `Pilot ${pilotName.value} is ready for launch`;
      copilotStatus.textContent = `Co-pilot ${copilotName.value} is ready for launch`;
      isReady();
   }

   }); // end form.addEventListener................

// This block of code shows how to format the HTML once you fetch some planetary JSON!

      fetch("https://handlers.education.launchcode.org/static/planets.json").then ( function(response){
         response.json().then( function(json) {
            const div = document.getElementById('missionTarget');
            //<h2>Mission Destination</h2>
            div.innerHTML = `
            <ol>
               <li>Name: ${json[2].name}</li>
               <li>Diameter: ${json[2].diameter}</li>
               <li>Star: ${json[2].star}</li>
               <li>Distance from Earth: ${json[2].distance}</li>
               <li>Number of Moons: ${json[2].moons}</li>
            </ol>
            <img src=${json[2].image}>
            `;
         })
      })

}); // end window.addEventListener.................
