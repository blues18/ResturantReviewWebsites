var RestaurantsURL = "/AllRestauarnts";//url at Server.js GetAllRestaurant
var Restaurant_array = []; // This creates an empty movie array
var Restaurant_Count = 0;
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of movies should be listed when the home page is first loaded. */
var category = "RestaurantTitle";
var current_index = 0;

var AllReviewedURL = "/AllReviewed";
var Reviewed_array=[];//This creates an empty Restaurant array
var Review_Count=0;
var reviewed = "Review";

var StarBWimage = 'images/640px-Emblem-star-gray.svg';
var Starimage = 'images/640px-Golden_star.svg';
var rating = 0;