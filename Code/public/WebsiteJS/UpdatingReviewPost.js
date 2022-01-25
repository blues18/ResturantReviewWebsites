//This function sends the Comment data to the server for updating
function updateReview() {
  var response = confirm("Are you sure you want to update this comment?");
  if (response == true) {
    var edit_Reviews_url = UpdatingReviewAPI + "/" + Reviewed_array[currentIndex].ReviewID;
    var updatingpost = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    updatingpost.open("PUT", edit_Reviews_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updatingpost.setRequestHeader("Content-Type", "application/json");

    Reviewed_array[currentIndex].ReviewTitle =
      document.getElementById("editReviewTitle").value;

    Reviewed_array[currentIndex].ReviewByUserName =
      document.getElementById("editReviewByUserName").value;

    Reviewed_array[currentIndex].ReviewPhoto =
      document.getElementById("editReviewimage").value;

    Reviewed_array[currentIndex].ReviewRestaurantName =
      document.getElementById("editReviewRestaurantName").value;

    Reviewed_array[currentIndex].Ratings =
      document.getElementById("editOverallratings").value;

    Reviewed_array[currentIndex].RatingPrice =
      document.getElementById("editRatingPrice").value;

    Reviewed_array[currentIndex].ReviewRestuarntHyperLink =
      document.getElementById("editReviewRestaurantHyperlink").value;

    Reviewed_array[currentIndex].RatingFood =
      document.getElementById("editRatingFood").value;

    Reviewed_array[currentIndex].RatingService =
      document.getElementById("editRatingService").value;

    Reviewed_array[currentIndex].ReviewComment =
      document.getElementById("editReviewComment").value;
    
    updatingpost.onload = function () {

        $('#successfulModal').modal('show');

    };
    updatingpost.send(JSON.stringify(Reviewed_array[currentIndex]));
  }
}
