
function getSpecificRestaurant(){
  var request = new XMLHttpRequest();
  request.open("POST", "http://127.0.0.1:8080/RestaurantSearch", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {

    Restaurant_array=JSON.parse(request.responseText)
    displaythisRestaurant();
    
  };
  var search = document.getElementById("mysearch").value;
  var payload = { RestaurantTitle: search };
  request.send(JSON.stringify(payload));
}

function displaythisRestaurant() {
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
    var Description =Restaurant_array[count].RestaurantDescription;
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
      Title +"(" + Ratings + '<div class="fa fa-star-o"></div>' + ")" +
      "</h5>"+ Description + "<p></p>"+ address +"<p></p>"+ openinghour+"</div>\
</div>";

    table.insertAdjacentHTML("beforeend", cell);
    Restaurant_Count++;

    message = howmany + " Restaurant singapore wide"; //displaying how many restaurant
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
  }
}
var input = document.getElementById("mysearch")
input.addEventListener("keyup",function(entered){
  if(entered.keyCode===13){
    entered.preventDefault();
    document.getElementById("submit").click();
  }
});


