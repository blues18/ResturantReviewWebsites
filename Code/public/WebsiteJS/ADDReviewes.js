function addReview() {
    var postReview = new XMLHttpRequest(); // new HttpRequest instance to send comment
  
    postReview.open("POST","http://127.0.0.1:8080/ADDReviewed", true); //Use the HTTP POST method to send data to server
    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function() {
  
          console.log("new comment sent");
          $('#successfulModal').modal('show');    
          location.reload(" ");
    };
    var ReviewResturantsID = document.getElementById("ReviewResturantsID").value;
    var ReviewUserID = document.getElementById("ReviewUserID").value;
    var ReviewTitle = document.getElementById("ReviewTitle").value;
    var ReviewPhoto = document.getElementById("ReviewPhoto").value;
    var ReviewRestaurantName = document.getElementById("ReviewRestaurantName").value;
    var Ratings = document.getElementById("Overallratings").value;
    var RatingPrice = document.getElementById("RatingPrice").value;
    var ReviewRestaurantHyperlink = document.getElementById("ReviewRestaurantHyperlink").value;
    var RatingFood = document.getElementById("RatingFood").value;
    var RatingService = document.getElementById("RatingService").value;
    var ReviewComment = document.getElementById("ReviewComment").value;
    var ReviewByUserName = document.getElementById("ReviewByUserName").value;
    var DatePost = null;
  
    var payload={ReviewResturantsID:ReviewResturantsID,ReviewUserID:ReviewUserID,ReviewTitle:ReviewTitle,ReviewPhoto:ReviewPhoto,ReviewRestaurantName:ReviewRestaurantName,
        Ratings:Ratings,RatingPrice:RatingPrice,ReviewRestaurantName:ReviewRestaurantName,ReviewRestaurantHyperlink:ReviewRestaurantHyperlink,
        RatingFood:RatingFood,RatingService,RatingService,ReviewComment,ReviewByUserName,DatePost}
     
  // Convert the data in Comment object to JSON format before sending to the server.
  postReview.send(JSON.stringify(payload)); 
  }

  
  

  