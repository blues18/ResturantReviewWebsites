function deletethis(){
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var deleting = new XMLHttpRequest();
        deleting.open("DELETE", "http://127.0.0.1:8080/DeleteUser/:Delete", true);
        deleting.onload = function() {

            $('#successfulModal').modal('show');
        }
    UserID = document.getElementById("userid").value;
    var payload = {UserID:UserID};
    deleting.send(JSON.stringify(payload));        
    }
}
