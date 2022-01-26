function encode(){
    var selectedfile = document.getElementById("myinput").files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var filereader = new FileReader();
        filereader.onload = function (fileLoadedEvent){
            UserProfilePictures = fileLoadedEvent.target.result;
            document.getElementById("target").src = UserProfilePictures;
        }
        filereader.readAsDataURL(imageFile);
    }
}

function update(){

    var updateUserDatails = new XMLHttpRequest();

    updateUserDatails.open("PUT","http://127.0.0.1:8080/NewUpdate",true);
    updateUserDatails.setRequestHeader("Content-Type","application/json");
    updateUserDatails.onload=function (){

        $('#successfulModal').modal('show');
       
    }
    FirstName = document.getElementById("FirstName").value;
    LastName = document.getElementById("LastName").value;
    Gender = document.getElementById("Gender").value;
    Address = document.getElementById("Address").value;
    Gender = document.getElementById("Gender").value;
    Address = document.getElementById("Address").value;
    PhoneNumber = document.getElementById("PhoneNumber").value;
    Email = document.getElementById("Email").value;
    UserDescription = document.getElementById("UserDescription").value;
    
    var payload = {Token:Token,UserProfilePictures:UserProfilePictures,FirstName:FirstName,LastName:LastName,Gender:Gender,Address:Address,PhoneNumber:PhoneNumber,Email:Email,UserDescription:UserDescription}//get this from Userprofile controller where we requested the body.username and password 
    updateUserDatails.send(JSON.stringify(payload));
} 

function deletethis() {
    var response = confirm("Are you sure you want to delete your account?");

    if (response == true) {
        var eraseuser = new XMLHttpRequest();

        eraseuser.open("DELETE","http://127.0.0.1:8080/DeleteUser",true);
        eraseuser.setRequestHeader("Content-Type","application/json");
        eraseuser.onload = function() {

            $('#successfulModal').modal('show'); 
            window.location.href="index.html";         
        }

        UserID = document.getElementById("userid").value;

        var payload={Deleteuserid:UserID};
        eraseuser.send(JSON.stringify(payload));
        }
    }