function getReviewDetails(){                              //getting details
  var request = new XMLHttpRequest();
  request.open("GET", AllReviewedURL, true);
  
  request.onload = function () {
 
    Reviewed_array = JSON.parse(request.responseText);
   
    console.log(Reviewed_array); // output to console
 
    displayReviewPost();
  }; 
  request.send();

  var Usertoken = sessionStorage.getItem("token");        //if token is correct then diaplay
  if (Usertoken != null) {
    $("#registerMenu").hide();
    $("#LoginMeun").hide();
    $("#LogOutMeun").show();
    $("#usereditMeun").show();
    $("#CreateReviewMeun").show();
    var ProfileReview = new XMLHttpRequest();
    ProfileReview.open("POST", "http://127.0.0.1:8080/imageUpload", true); //get data
    ProfileReview.setRequestHeader("Content-Type", "application/json");
    ProfileReview.onload = function () {
      var display = JSON.parse(ProfileReview.responseText);

      console.log(ProfileReview.responseText);

      ImageProfile = display[0].UserProfilePictures;
      document.getElementById("displayImage").src = ImageProfile;


    };
    var payload = { Token: Token };
    ProfileReview.send(JSON.stringify(payload));
  } else {
    $("#CreateReviewMeun").hide();
  }
  
}

function displayReviewPost() {                            //getting all the reviewDetails
  var table = document.getElementById("ReviewsTable");
  var Review_Count = 0;
  var message = "";

  table.innerHTML = "";
  totalReviewPost = Reviewed_array.length;
  for (var count = 0; count < totalReviewPost; count++) {
    var reviewedimage = Reviewed_array[count].ReviewPhoto;
    var ReviewTitle = Reviewed_array[count].ReviewTitle;
    var ReviewComment = Reviewed_array[count].ReviewComment;
    var DatePost = Reviewed_array[count].DatePost;
    var ReviewByUserName = Reviewed_array[count].ReviewByUserName;
    //var numberofID = Reviewed_array[count].ReviewID;
    var cell =
      '<div class="card col-md-3" ><img class="card-img-top" src="' +
      reviewedimage +
      '" alt="Card image cap">\
      \
                        <div class="card-body"><i class="far fa-comments fa-lg" style="float:left;cursor:pointer;margin-top:25px" data-toggle="modal" data-target="#editReviewModal" item="' +
      count +
      '" onClick="editReview(this)"></i>\
                        \
                        </li> <div class="card-body" ><i class="fa fa-trash" style="float:right;cursor:pointer; margin-top:5px;margin-left:10px" data-toggle="modal" item="' +
      count +
      '" onClick="deleteReview(this)"></i>\
                        \
    <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#ReviewModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantPost(this)">' +
      ReviewTitle +
      '"</h5><div style="text-align:left;">Comments: "' +
      ReviewComment +
      "</div></div>\
    " +
      DatePost +
      "<p></p><div>By User: " +
      ReviewByUserName +
      "</div></div>";

    table.insertAdjacentHTML("beforeend", cell);
    Review_Count++;

    message = Review_Count + " Reviews Post ";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
  }
}
function showRestaurantPost(element) {                                            //When clicking a review post it shows more details inside 
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
  document.getElementById("reviewByUserName").textContent =
    Reviewed_array[item].ReviewByUserName;
  document.getElementById("datePost").textContent =
    Reviewed_array[item].DatePost;
}

function editReview(element) {                                  //edit reviewpost when clciking on the reveiw post item/element
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
  document.getElementById("editRatingFood").value =
    Reviewed_array[item].RatingFood;
  document.getElementById("editRatingService").value =
    Reviewed_array[item].RatingService;
  document.getElementById("editReviewComment").value =
    Reviewed_array[item].ReviewComment;
  document.getElementById("editReviewByUserName").value =
    Reviewed_array[item].ReviewByUserName;
  document.getElementById("showtarget").src = Reviewed_array[item].ReviewPhoto;
}
