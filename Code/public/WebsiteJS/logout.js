function logoutMe() {

    $('#registerMenu').show();
    $('#LoginMeun').show();
    $('#LogOutMeun').hide();
    $('#usereditMeun').hide();
    sessionStorage.removeItem("token");    
}