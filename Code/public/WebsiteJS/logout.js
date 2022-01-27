function logoutMe() {

    $('#registerMenu').show();
    $('#LoginMeun').show();
    $('#LogOutMeun').hide();
    $('#usereditMeun').hide();
    $('#CreateReviewMeun').hide(); 

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username")    
}