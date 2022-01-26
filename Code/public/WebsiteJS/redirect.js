$(document).ready(function (){

    var Usertoken = sessionStorage.getItem("token");
    if (Usertoken != null) {
        $('#registerMenu').hide();
        $('#LoginMeun').hide();  
        $('#LogOutMeun').show();
        $('#usereditMeun').show();     
        $('#CreateReviewMeun').show(); 
    } else{
        window.location.href="index.html";
    }

})