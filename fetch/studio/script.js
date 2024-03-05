//TODO: Add Your Code Below
window.addEventListener("load", function() {
    let container = this.document.getElementById("container")
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch data!");
            }
        })
        .then(response =>{
            response.forEach(current =>{
                container.innerHTML += `
                <h3>${current.firstName} ${current.lastName}</h3>
                <ul>
                    <li>Hours in Space: ${current.hoursInSpace}</li>
                    <li>Active : ${current.active}</li>
                    <li>Skills : ${current.skills}</li>
                </ul>
                <img src=${current.picture}/>
                `
            })
        })
     
        .catch(function(error) {
            console.error("Error fetching astronauts data:", error);
        });
});


