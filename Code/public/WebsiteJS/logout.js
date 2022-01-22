function logoutMe() {

    $('#registerMenu').show();
    $('#LoginMeun').show();
    $('#LogOutMeun').hide();
    sessionStorage.removeItem("token");    
}