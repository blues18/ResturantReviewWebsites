$(document).ready(function (){

    var Usertoken = sessionStorage.getItem("token");
    if (Usertoken != null) {
        $('#registerMenu').hide();
        $('#LoginMeun').hide();
        $('#LogOutMeun').show();
        $('#usereditMeun').show();
        $('#userdisplay').hide();
        $('#CreateReviewMeun').show();
         
    }    
})