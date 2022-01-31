function addReview(){
    var postReview = new XMLHttpRequest(); // new HttpRequest instance to send comment
  
    postReview.open("POST","http://127.0.0.1:8080/ADDReviewed", true); //Use the HTTP POST method to send data to server
    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function() {
  
          console.log("new comment sent");
          $('#successfulModal').modal('show');
          location.reload(" ");    
    };

   
    ReviewByUserName = sessionStorage.getItem("username");
    
    var ReviewResturantsID = document.getElementById("ReviewRestaurantsID").value;
    var ReviewUserID = document.getElementById("ReviewUserID").value;
    var ReviewTitle = document.getElementById("ReviewTitle").value;
    var ReviewRestaurantName = document.getElementById("ReviewRestaurantName").value;
    var Ratings = document.getElementById("Overallratings").value;
    var RatingPrice = document.getElementById("RatingPrice").value;
    var RatingFood = document.getElementById("RatingFood").value;
    var RatingService = document.getElementById("RatingService").value;
    var ReviewComment = document.getElementById("ReviewComment").value;
    var ReviewByUserName = document.getElementById("ReviewByUserName").value;
    var DatePost = null;
  
    var payload={ReviewResturantsID:ReviewResturantsID,ReviewUserID:ReviewUserID,ReviewTitle:ReviewTitle,ReviewPhoto:ReviewPhoto,ReviewRestaurantName:ReviewRestaurantName,
        Ratings:Ratings,RatingPrice:RatingPrice,ReviewRestaurantName:ReviewRestaurantName,
        RatingFood:RatingFood,RatingService,RatingService,ReviewComment,ReviewByUserName,DatePost}

  postReview.send(JSON.stringify(payload)); 
  }

  function encode2(){
      var selectedfile = document.getElementById("myinputreview").files;
      if (selectedfile.length > 0) {
          var imageFile = selectedfile[0];
          var filereader = new FileReader();
          filereader.onload = function (fileLoadedEvent){
                ReviewPhoto = fileLoadedEvent.target.result;
                document.getElementById("target").src = ReviewPhoto;
          }
          filereader.readAsDataURL(imageFile);
      }
  }

  
  

  