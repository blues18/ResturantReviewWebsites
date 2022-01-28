function getReviewDetails() {
  var request = new XMLHttpRequest();
  request.open("GET", AllReviewedURL, true);
  //This function will be called when data returns from the web api
  request.onload = function () {
    //get all the movies records into our review array
    Reviewed_array = JSON.parse(request.responseText);
    //Fetch the comments as well
    //fetchComments();
    console.log(Reviewed_array); // output to console
    //call the function so as to display all movies tiles for "Now Showing"
    displayReviewPost();
  };
  //This command starts the calling of the movies web api
  request.send();
}

function displayReviewPost() {
  var table = document.getElementById("ReviewsTable");
  var Review_Count = 0;
  var message = "";

  table.innerHTML = "";
  totalReviewPost = Reviewed_array.length;
  for (var count = 0; count < totalReviewPost; count++) {
    var reviewedimage = Reviewed_array[count].ReviewPhoto;
    var ReviewTitle = Reviewed_array[count].ReviewTitle;
    var numberofID = Reviewed_array[count].ReviewID;
    var cell =
      '<div class="card col-md-3" ><img class="card-img-top" src="' +
      reviewedimage +
      '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#editReviewModal" item="' +
      count +
      '" onClick="editReview(this)"></i>\
                        </li> <div class="card-body" ><i class="fa fa-trash" style="float:right;cursor:pointer;" data-toggle="modal" item="' +
      count +
      '" onClick="deleteReview(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#ReviewModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantPost(this)">' +
      ReviewTitle +
      "</h5></div>\
</div>";

    table.insertAdjacentHTML("beforeend", cell);
    Review_Count++;

    message = Review_Count + " ReviewsPost ";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
  }
}
function showRestaurantPost(element) {
  var item = element.getAttribute("item");
  ReviewedCurrent_index = item;
  document.getElementById("reviewsTitle").textContent =
    Reviewed_array[item].ReviewTitle;
  document.getElementById("reviewimage").src = Reviewed_array[item].ReviewPhoto;
  document.getElementById("reviewRestaurantName").textContent =
    Reviewed_array[item].ReviewRestaurantName;
  document.getElementById("overallratings").textContent =
    Reviewed_array[item].Ratings;
  document.getElementById("ratingPrice").textContent =
    Reviewed_array[item].RatingPrice;
  document.getElementById("ratingFood").textContent =
    Reviewed_array[item].RatingFood;
  document.getElementById("ratingService").textContent =
    Reviewed_array[item].RatingService;
  document.getElementById("reviewComment").textContent =
    Reviewed_array[item].ReviewComment;
  document.getElementById("reviewRestaurantHyperlink").src =
    Reviewed_array[item].ReviewRestuarntHyperLink;
  document.getElementById("reviewByUserName").textContent =
    Reviewed_array[item].ReviewByUserName;
  document.getElementById("datePost").textContent =
    Reviewed_array[item].DatePost;
}

function editReview(element) {
  var item = element.getAttribute("item");

  currentIndex = item;

  document.getElementById("editReviewResturantsID").value =
    Reviewed_array[item].ReviewResturantsID;
  document.getElementById("editReviewUserID").value =
    Reviewed_array[item].ReviewUserID;
  document.getElementById("editReviewTitle").value =
    Reviewed_array[item].ReviewTitle;
  document.getElementById("editReviewRestaurantName").value =
    Reviewed_array[item].ReviewRestaurantName;
  document.getElementById("editOverallratings").value =
    Reviewed_array[item].Ratings;
  document.getElementById("editRatingPrice").value =
    Reviewed_array[item].RatingPrice;
  document.getElementById("editReviewRestaurantHyperlink").value =
    Reviewed_array[item].ReviewRestuarntHyperLink;
  document.getElementById("editRatingFood").value =
    Reviewed_array[item].RatingFood;
  document.getElementById("editRatingService").value =
    Reviewed_array[item].RatingService;
  document.getElementById("editReviewComment").value =
    Reviewed_array[item].ReviewComment;
  document.getElementById("editReviewByUserName").value =
    Reviewed_array[item].ReviewByUserName;
}

var Usertoken = sessionStorage.getItem("token");
if (Usertoken != null) {
  $("#registerMenu").hide();
  $("#LoginMeun").hide();
  $("#LogOutMeun").show();
  $("#usereditMeun").show();
  $("#CreateReviewMeun").show();
  var Profile = new XMLHttpRequest();
  Profile.open("POST", "http://127.0.0.1:8080/imageUpload", true); //get data
  Profile.setRequestHeader("Content-Type", "application/json");
  Profile.onload = function (){


    console.log(Profile.responseText);
  };
 
  var payload={Token:Token};
  Profile.send(JSON.stringify(payload));
} else {
  $("#CreateReviewMeun").hide();
}
