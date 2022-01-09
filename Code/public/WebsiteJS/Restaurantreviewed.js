var RestaurantReviewed = "/AllReviewed";

var Restaurant_array = []; // This creates an empty movie array
var Restaurant_Count = 0;

var ReviewCategory = "ReviewTitle";

function getRestaurantReviewed(){    
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
}