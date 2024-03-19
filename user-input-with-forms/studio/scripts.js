// Write your JavaScript code here.
// Remember to pay attention to page loading!

let name = document.getElementById('nameInput').value;
let email = document.getElementById('email').value;
let message = document.getElementById('message').value;

let formData = {
    name: nameInput,
    email: email,
    message: message,
};
console.log(formData);  

function submitForm(formData){
    let endpoint ='https://r31jbh92tk.execute-api.us-east-1.amazonaws.com/dev/submit_message'
    let options = {
        method: POST,
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(formData)
    }
    fetch(endpoint, options)// Dont know if this will work O_O!
    .then(response =>{
        if(!response.ok){
            throw new Error('failed to sumbmit');
         } return response.json()
        
        })
        .catch(data => {
            console.log('Successfully Sumbmited', data)
        })
        .catch(error =>{
            console.error('Failed to Submit!',error)
        });
}