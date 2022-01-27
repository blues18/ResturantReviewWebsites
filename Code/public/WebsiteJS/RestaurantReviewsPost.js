function restaurantsReview() {
  var request = new XMLHttpRequest();

  request.open("GET", AllReviewedURL, true);

  //This command starts the calling of the comments api
  request.onload = function () {
    //get all the comments records into our comments array
    Reviewed_array = JSON.parse(request.responseText);
    console.log(Reviewed_array);
  };
  request.send();
}

function getReview(element) {
  document.getElementById("emptyReview").innerHTML =
    "No review yet. Create one now";
  var item = element.getAttribute("item");
  currentIndex = item;
  document.getElementById("review").textContent =
    "Review for " + Restaurant_array[item].ReviewTitle;
  document.getElementById("commentBody").textContent = "";

  for (var i = 0; i < Reviewed_array.length; i++) {
    if (Reviewed_array[i].ReviewResturantsID === Restaurant_array[item].RestaurantID) {
      document.getElementById("RestaurantReview").innerHTML = "";
      selectedRestaurant = Restaurant_array[item].RestaurantID;
      star = "";
      var html =
        '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' +
        i +
        '">' +
        Reviewed_array[i].ReviewTitle +
        "</p>               \
                                    <small>by " +
        Reviewed_array[i].ReviewByUserName +
        " @ " +
        Reviewed_array[i].DatePost +
        "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
      document
        .getElementById("commentBody")
        .insertAdjacentHTML("beforeend", html);

      var star = "";
      for (var j = 0; j < Reviewed_array[i].Ratings; j++) {
        console.log(i);
        star += "<img src='images/popcorn.png' style='width:50px' />";
      }
      star +=
        "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" +
        i +
        "' onClick='deleteComment(this)' ></i>";
      star +=
        "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" +
        i +
        "' onClick='editComment(this)' ></i>";
      document
        .getElementById("rating" + i)
        .insertAdjacentHTML("beforebegin", star + "<br/>");
    }
  }
}
