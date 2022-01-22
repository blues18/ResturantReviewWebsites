function registerMe(){

    var registerUser= new XMLHttpRequest();

    registerUser.open("POST","http://127.0.0.1:8080/AddUser",true);
    registerUser.setRequestHeader("Content-Type","application/json");
    registerUser.onload=function (){
        
        $('#registerModal'),modal('hide');
    }

    var UserName = document.getElementById("username").value;
    var FirstName = document.getElementById("firstname").value;
    var LastName = document.getElementById("lastname").value;
    var Gender = document.getElementById("gender").value;
    var Address = document.getElementById("address").value;
    var PhoneNumber = document.getElementById("PhoneNumber").value;
    var Email = document.getElementById("email").value;
    var PassWord = document.getElementById("password").value;
    var UserProfilePictures = document.getElementById("userprofilepicture").value
    var payload = {UserName:UserName,FirstName:FirstName,LastName:LastName,Gender:Gender,
        Address:Address,PhoneNumber:PhoneNumber,Email:Email,PassWord:PassWord,UserProfilePictures:UserProfilePictures}//get this from Userprofile controller where we requested th body.username and password 
    registerUser.send(JSON.stringify(payload));
} 