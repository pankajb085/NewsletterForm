const form = document.getElementsByClassName("form-container")[0];
const emailEL = document.getElementById("email");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const email = emailEL.value;
    console.log(email);
    location.assign('./success.html');
});
