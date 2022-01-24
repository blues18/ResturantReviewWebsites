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
        FirstName=displayProfile[0].FirstName;
        LastName=displayProfile[0].LastName;
        Gender=displayProfile[0].Gender;
        Address=displayProfile[0].Address;
        PhoneNumber=displayProfile[0].PhoneNumber;
        Email=displayProfile[0].Email;
        UserDescription=displayProfile[0].UserDescription;

        document.getElementById('userid').value=UserID;
        document.getElementById('Username').value=UserName;
        document.getElementById('Password').value=PassWord;
        document.getElementById('FirstName').value=FirstName;
        document.getElementById('LastName').value=LastName;
        document.getElementById('Gender').value=Gender;
        document.getElementById('Address').value=Address;
        document.getElementById('PhoneNumber').value=PhoneNumber;
        document.getElementById('Email').value=Email;                        
        document.getElementById('target').src=UserProfilePictures;
        document.getElementById('UserDescription').value=UserDescription;   
    
    }
    var payload={Token:Token};
    Profile.send(JSON.stringify(payload));
})