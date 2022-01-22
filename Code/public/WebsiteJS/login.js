function loginMe(){

    var LoginUser= new XMLHttpRequest();

    LoginUser.open("POST","/Usertoken",true);
    LoginUser.setRequestHeader("Content-Type","application/json");
    LoginUser.onload=function (){
        
        $('#LoginModal').modal('hide');

        var Usertoken = JSON.parse(LoginUser.responseText);
        console.log(Usertoken.result);

        if (Usertoken.result != false) {
            $('#loginFailed').modal('show');
            document.getElementById("registerMenu").style.display="none";
            document.getElementById("LoginMeun").style.display="none";
            document.getElementById("LogOutMeun").style.display="block";
            sessionStorage.setItem("token", Usertoken.result);
        }else {
            $('#loginFailed').modal('show');
        }
    }
    var Username = document.getElementById("usernamelogin").value; 
    var Password = document.getElementById("passwordlogin").value;
    var payload = {UserName:Username,PassWord:Password}//get this from Userprofile controller where we requested th body.username and password 
    LoginUser.send(JSON.stringify(payload));
} 