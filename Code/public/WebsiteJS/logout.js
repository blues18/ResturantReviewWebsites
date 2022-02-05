function logoutMe() {

    $('#registerMenu').show();
    $('#LoginMeun').show();
    $('#LogOutMeun').hide();
    $('#usereditMeun').hide();
    $('#CreateReviewMeun').hide();
    $('#userdisplay').hide();
    $('#submitComment').hide();

    var object = document.getElementById("displayImage");
    object.remove();
    
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");  
    localStorage.removeItem("userid"); 
    localStorage.removeItem("username"); 
}