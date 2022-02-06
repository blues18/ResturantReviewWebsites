function RestaurantCuisines1(){  
	var request = new XMLHttpRequest();    
	request.open('POST', "http://127.0.0.1:8080/EthnicRestaurant", true);    
    request.setRequestHeader("Content-Type", "application/json") 
	request.onload = function() {        
	  
    Restaurant_array = JSON.parse(request.responseText);   
    displayRestaurantCuisines()     
    console.log(Restaurant_array)        	
    };

    var findthisCurisin = document.getElementById("thisCuisines").value;
    var payload = {EthnicRestaurant:findthisCurisin};
    request.send(JSON.stringify(payload));
}  

function RestaurantCuisines2(){  
	var request = new XMLHttpRequest();    
	request.open('POST', "http://127.0.0.1:8080/EthnicRestaurant", true);    
    request.setRequestHeader("Content-Type", "application/json") 
	request.onload = function() {        
	  
    Restaurant_array = JSON.parse(request.responseText);   
    displayRestaurantCuisines()    
    console.log(Restaurant_array)        	
    };

    var findthisCurisin = document.getElementById("thisCuisines2").value;
    var payload = {EthnicRestaurant:findthisCurisin};
    request.send(JSON.stringify(payload));
}  

function RestaurantCuisines3(){  
	var request = new XMLHttpRequest();    
	request.open('POST', "http://127.0.0.1:8080/EthnicRestaurant", true);    
    request.setRequestHeader("Content-Type", "application/json") 
	request.onload = function() {        
	  
    Restaurant_array = JSON.parse(request.responseText);   
    displayRestaurantCuisines() 
    console.log(Restaurant_array)        	
    };

    var findthisCurisin = document.getElementById("thisCuisines3").value;
    var payload = {EthnicRestaurant:findthisCurisin};
    request.send(JSON.stringify(payload));
} 

function RestaurantCuisines4(){  
	var request = new XMLHttpRequest();    
	request.open('POST', "http://127.0.0.1:8080/EthnicRestaurant", true);    
    request.setRequestHeader("Content-Type", "application/json") 
	request.onload = function() {        
	  
    Restaurant_array = JSON.parse(request.responseText);   
    displayRestaurantCuisines()     
    console.log(Restaurant_array)        	
    };

    var findthisCurisin = document.getElementById("thisCuisines4").value;
    var payload = {EthnicRestaurant:findthisCurisin};
    request.send(JSON.stringify(payload));
}  

function displayRestaurantCuisines() {
  var table = document.getElementById("RestaurantTable");
  var Restaurant_Count = 0;
  var message = "";
 

  table.innerHTML = "";
  totalRestaurant = Restaurant_array.length; //display
  for (var count = 0; count < totalRestaurant; count++) {
    var howmany = Restaurant_array[count].EthnicRestaurant;
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
      Title +"("+Ratings + '<div class="fa fa-star-o"></div>' + ")" +
      "</h5>"+ Description + "<p></p>"+ address +"<p></p>"+ openinghour+"</div>\
</div>";

    table.insertAdjacentHTML("beforeend", cell);
    Restaurant_Count++;
    

    message = howmany + " Restaurant "; 
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
  }
}


  
  






