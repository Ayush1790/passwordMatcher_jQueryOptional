$(document).ready(function () {
    console.log("Ayush");
})
//function for get time
$("#pswd").keyup(function () {
   let val=$('#pswd').val();
   let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
    if(strongPassword.test(val)) {
        $("#msg").text("Good Password").css('background-color','green');
    } else if(mediumPassword.test(val)){
        $("#msg").text("fair Password").css('background-color','blue');
    } else{
        $("#msg").text("weak Password").css('background-color','red');
    }
})