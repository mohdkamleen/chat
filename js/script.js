 
var user = document.getElementById("show_users");
var details = document.getElementById("user_details");
var details_section = document.getElementsByClassName("details_section")[0];
var user_section = document.getElementsByClassName("user_section")[0];



// all users section going to be hide and show 
user.addEventListener("click", function () {
  if (user_section.style.width == '500px') {
    user_section.style.width = '0px';
    user.classList.replace("fa-times", "fa-user");
  } else {
    user_section.style.width = '500px';
    details_section.style.width = '0px';
    details.classList.replace("fa-times", "fa-info-circle");
    user.classList.replace("fa-user", "fa-times");
  }
});


// user details section going to be hide and show 
details.addEventListener("click", function () {
  if (details_section.style.width == '500px') {
    details_section.style.width = '0px';
    details.classList.replace("fa-times", "fa-info-circle");
  } else {
    details_section.style.width = '500px';
    user_section.style.width = '0px'
    details.classList.replace("fa-info-circle", "fa-times");
    user.classList.replace("fa-times", "fa-user");
  }
}); 