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
  document.getElementById("emptyReview").innerHTML = "No review yet. Create one now";
  var item = element.getAttribute("item");
  ReviewedCurrent_index = item;
  document.getElementById("review").textContent = "Review for " + Restaurant_array[item].RestaurantTitle;
  document.getElementById("NewReviewbody").textContent = "";

  for (var i = 0; i < Reviewed_array.length; i++) {
      if (Reviewed_array[i].ReviewResturantsID=== Restaurant_array[item].RestaurantID) {
          document.getElementById("emptyReview").innerHTML = "";
          selectedReviewId = Restaurant_array[item].RestaurantID;
          images = Reviewed_array[item].ReviewPhoto;
          star = "";
          var html = '<div class="text-center" style="width:100%;">                                                           \
                          <div class="card"; style="border-color:black"; "border:10px;">                                                                                  \
                              <div class="card-body" style="background: -webkit-linear-gradient(right, #555555, #000000);">\
                                <div class="card col-md-3" ><img class="card-img-top" src="'+ images +'alt="Card image cap" style = "width:200px"> \
                                    <p class="card-text" id="rating' + i + '">' + Reviewed_array[i].ReviewTitle + "</p>               \
                                  <small>by " + Reviewed_array[i].ReviewByUserName + " @ " + Reviewed_array[i].DatePost + "</small>   \
                              </div>                                                                                          \
                          </div>                                                                                              \
                      </div>";
          document.getElementById("NewReviewbody").insertAdjacentHTML('beforeend', html);

        
          var star = "";
          star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)' ></i>";
          star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#ReviewModal' data-dismiss='modal' item='" + i + "' onClick='editReview(this)' ></i>";
          document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
      }
  }
}
