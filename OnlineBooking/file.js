
function changeBorderColor(){
    document.getElementById("name").style.borderColor="red;";
}
function validation(){
    var error_in_name=document.getElementById("name_error");
    var error_in_email=document.getElementById("email_error");
    var error_in_pass=document.getElementById("pass_error");
    var name_value=document.getElementById("name").value;
    var email_value=document.getElementById("email").value;
    var pass_value=document.getElementById("password").value;
    localStorage.setItem("Name",name_value);
    localStorage.setItem("Email",email_value);
    localStorage.setItem("Password",pass_value);
        if(name_value.length == 0 || email_value.length == 0 || pass_value.length == 0){
             error_in_name.innerHTML="*Please fill this";
        }
        else if(name_value.length<=3){
            error_in_name.innerHTML="*Name is too short";
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Something went wrong!',
        //     footer: '<a href="">Why do I have this issue?</a>'
        //   })
          
        }
        else if(!email_value.includes("@")){
            error_in_email.innerHTML="*Please Enter Correct E_mail";
        }
            
        else if(pass_value.length<8){
            error_in_pass.innerHTML="*Password Size must be 8";
        }
        else{
            swal("Good job!", "Your Account has been created");
        }
}

function signin() {
    var check_email = document.getElementById("show_error");
    var check_password=document.getElementById("pass_error");
    var email=document.getElementById("Email").value;
    var password=document.getElementById("password").value;
    if(localStorage.getItem("Email")==email && localStorage.getItem("Password")==password){
        location.href="OnlineRoomBooking.html";
    }
    else if (localStorage.getItem("Email")!=email) {
        check_email.innerHTML = "*E-mail is incorrect";
    }
    else if(localStorage.getItem("password")!=password){
        check_password.innerHTML="*Password is incorrect";
     }
}