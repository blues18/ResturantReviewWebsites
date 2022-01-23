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

    updateUserDatails.open("PUT","http://127.0.0.1:8080/ReviewedUpdate",true);
    updateUserDatails.setRequestHeader("Content-Type","application/json");
    updateUserDatails.onload=function (){

        $('#successfulModal').modal('show');
       
    }
    Password = document.getElementById("Password").value;
    var payload = {Token:Token,UserProfilePictures:UserProfilePictures,Password:PassWord}//get this from Userprofile controller where we requested th body.username and password 
    updateUserDatails.send(JSON.stringify(payload));
} 