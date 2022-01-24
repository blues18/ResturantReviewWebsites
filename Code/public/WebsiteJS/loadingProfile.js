$(document).ready(function (){

    var Profile = new XMLHttpRequest();
    Profile.open("POST","http://127.0.0.1:8080/imageUpload",true);
    Profile.setRequestHeader("Content-Type","application/json");
    Profile.onload=function (){
        var displayProfile = JSON.parse(Profile.responseText);
        console.log(Profile.responseText);
        UserID=displayProfile[0].UserID
        UserProfilePictures=displayProfile[0].UserProfilePictures;
        UserName=displayProfile[0].UserName;
        PassWord=displayProfile[0].PassWord;
        document.getElementById('userid').value=UserID;
        document.getElementById('Username').value=UserName;
        document.getElementById('Password').value=PassWord;   
        document.getElementById('target').src=UserProfilePictures;        
    }
    var payload={Token:Token};
    Profile.send(JSON.stringify(payload));
})