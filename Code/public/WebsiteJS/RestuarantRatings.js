function getRestaurantRatingASC() {
    var request = new XMLHttpRequest();
    request.open("GET","http://127.0.0.1:8080/RestaurantRatingInASC", true); //this is based on postman method
    //This function will be called when data returns from the web api
    request.onload = function () {
      //get all the movies records into our movie array
      Restaurant_array = JSON.parse(request.responseText);
      //Fetch the comments as well
      restaurantsReview();
      console.log(Restaurant_array); // output to console
      //call the function so as to display all movies tiles for "Now Showing"
      displayRestaurantRate(category);
    }
    request.send();
  }


  function getRestaurantRatingDESC() {
    var request = new XMLHttpRequest();
    request.open("GET","http://127.0.0.1:8080/RestaurantRatingInDESC", true); //this is based on postman method
    //This function will be called when data returns from the web api
    request.onload = function () {
      //get all the movies records into our movie array
      Restaurant_array = JSON.parse(request.responseText);
      //Fetch the comments as well
      restaurantsReview();
      console.log(Restaurant_array); // output to console
      //call the function so as to display all movies tiles for "Now Showing"
      displayRestaurantRate(category);
    }
    request.send();
  }


  function displayRestaurantRate() {
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
                          <div class="card-body"><i class="far fa-comments fa-lg"  style="float:left;cursor:pointer" data-toggle="modal" data-target="#RestaurantReview" item="' +
        count +
        '" onClick="getReview(this)"></i>\
                          <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restuarantModal" class="card-title" item="' +
        count +
        '" onClick="showRestaurantdetails(this)">' +
        Title +"("+Ratings + '<div class="fa fa-star-o"></div>' + ")" +
        "</h5>"+ Description + "<p></p>"+ address +"<p></p>"+ openinghour+"</div>\
  </div>";
  
      table.insertAdjacentHTML("beforeend", cell);
      Restaurant_Count++;
      
  
      message = howmany + " Restaurant singapore wide"; 
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
    }
  }

  