//function to getAllRestaurantDetails
function getRestaurantDetails() {
  var request = new XMLHttpRequest();
  request.open("GET", RestaurantsURL, true); //this is based on postman method
  //This function will be called when data returns from the web api
  request.onload = function () {
    //get all the movies records into our movie array
    Restaurant_array = JSON.parse(request.responseText);
    //Fetch the comments as well
    restaurantsReview();
    console.log(Restaurant_array); // output to console
    //call the function so as to display all movies tiles for "Now Showing"
    displayRestaurant(category);
  };

  //This command starts the calling of the movies web api
  request.send();

  var Usertoken = sessionStorage.getItem("token");
  console.log(Usertoken);

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
    var payload = { Token: Usertoken };
    ProfileReview.send(JSON.stringify(payload));
  }
}

function displayRestaurant() {
  var table = document.getElementById("RestaurantTable");
  var Restaurant_Count = 0;
  var message = "";

  table.innerHTML = "";
  totalRestaurant = Restaurant_array.length; //display
  for (var count = 0; count < totalRestaurant; count++) {
    var howmany = Restaurant_array[count].RestaurantID;
    var thumbnail = Restaurant_array[count].RestaurantImage;
    var Title = Restaurant_array[count].RestaurantTitle;
    var Ratings = Restaurant_array[count].Ratings;
    var Description = Restaurant_array[count].RestaurantDescription;
    var address = Restaurant_array[count].RestaurantAddress;
    var openinghour = Restaurant_array[count].OpeningHourRestaurant;
    var cell =
      '<div class="card col-md-3" ><img class="card-img-top" src="' +
      thumbnail +
      '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comments fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#RestaurantReview" item="' +
      count +
      '" onClick="getReview(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restuarantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantdetails(this)">' +
      Title +
      "(" +
      Ratings +
      '<div class="fa fa-star-o"></div>' +
      ")" +
      "</h5>" +
      Description +
      "<p></p>" +
      address +
      "<p></p>" +
      openinghour +
      "</div>\
</div>";

    table.insertAdjacentHTML("beforeend", cell);
    Restaurant_Count++;

    message = howmany + " Restaurant singapore wide";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
  }
}

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showRestaurantdetails(element) {
  var item = element.getAttribute("item");
  currentIndex = item;
  document.getElementById("Title").textContent =
    Restaurant_array[item].RestaurantTitle;
  document.getElementById("RestaurantImage").src =
    Restaurant_array[item].RestaurantImage;
  document.getElementById("EthnicRestaurant").textContent =
    Restaurant_array[item].EthnicRestaurant;
  document.getElementById("RestaurantAddress").textContent =
    Restaurant_array[item].RestaurantAddress;
  document.getElementById("OpeningHourRestaurant").textContent =
    Restaurant_array[item].OpeningHourRestaurant;
  document.getElementById("Ratings").textContent =
    Restaurant_array[item].Ratings;
  document.getElementById("RestaurantDescription").textContent =
    Restaurant_array[item].RestaurantDescription;
  document.getElementById("trailer1").src = Restaurant_array[item].video1;
  document.getElementById("trailer2").src = Restaurant_array[item].video2;
}

function showPassword(){
  var x = document.getElementById("passwordlogin");
  if (x.type === "passwordlogin") {
    x.type = "text";
  } else {
    x.type = "passwordlogin";
  }
}
