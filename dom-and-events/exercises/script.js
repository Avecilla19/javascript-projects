function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
   button.addEventListener('click', event => {
    paragraph.innerHTML = 'Huston! We have liftoff!'
   });


//let missionAbort = document.getElementById("abortMission")
missionAbort.addEventListener('click', event =>{
   let abort = window.confirm("Are you sure you want to abort the mission?")
   if(abort){
   // let statusReport = document.getElementById("statusReport");
    paragraph.textContent= "Mission aborted! Space shuttle returning home";
   }
})
}
/*

 */
window.addEventListener("load", init);
