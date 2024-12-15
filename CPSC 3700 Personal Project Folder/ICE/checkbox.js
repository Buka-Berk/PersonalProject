// validate.js

function checkForm(event) {
    let tosWidget = document.querySelector("#tos");
 
    // Cancel form submission if tos not checked
    if (!tosWidget.checked) {
       event.preventDefault();
       alert("error has been given.");
    }
 }
 
 let tosForm = document.querySelector("#tosForm");
 tosForm.addEventListener("submit", checkForm);