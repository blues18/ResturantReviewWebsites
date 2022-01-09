//function to getAllRestaurantDetails
var RestaurantUrl = "/AllRestauarnts"; //urlatServer.jsGetAllRestaurant
var Restaurant_array = []; // This creates an empty movie array
var Restaurant_Count = 0;
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of movies should be listed when the home page is first loaded. */
var category = "RestaurantTitle";

function getRestaurantDetails(){    
	var request = new XMLHttpRequest();    
	request.open('GET', RestaurantsURL, true); //this is based on postman method
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the movies records into our movie array        
	Restaurant_array = JSON.parse(request.responseText);        
	//Fetch the comments as well        
	//fetchComments();
	console.log(Restaurant_array) // output to console        
	//call the function so as to display all movies tiles for "Now Showing"        	
    displayRestaurant(category);    
};
   
//This command starts the calling of the movies web api    
request.send();}
function displayRestaurant() {
    var table = document.getElementById("RestaurantTable");
    var Restaurant_Count = 0;
    var message = "";
    debugger;

    table.innerHTML = "";
    totalRestaurant=Restaurant_array.length;                        //display
    for (var count = 0; count < totalRestaurant; count++) {
            var howmany = Restaurant_array[count].RestaurantID;
            var thumbnail = Restaurant_array[count].RestaurantImage;
            var Description = Restaurant_array[count].RestaurantDescription;
	var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#RestaurantReview" item="' + count + '" onClick="Review(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#Restaurant" class="card-title" item="' + count + '" onClick="Restaurant(this)">' + Description + '</h5></div>\
</div>'
            table.insertAdjacentHTML('beforeend', cell);
            Restaurant_Count++;
            debugger;

            message = howmany + " Restaurant singapore wide" ; //displaying how many restaurant 
            document.getElementById("summary").textContent = message;
            document.getElementById("parent").textContent = "";
        }
    }
    function Cuisines(){
        category = "EthnicRestaurant";
        displayRestaurant(category);
        document.getElementById("nowMenu").classList.add("active");
        document.getElementById("comingMenu").classList.remove("active");
        document.getElementById("aboutMenu").classList.remove("active");
    }
    

    
       

    
