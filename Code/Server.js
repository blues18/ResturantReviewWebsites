var express = require("express");// framework

var restuarntsController = require('./controllers/RestuarntsController');
var reviewedController = require('./controllers/ReviewedController');
var userprofileController = require('./controllers/UserProfileController')

var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/AllRestauarnts').get(restuarntsController.getAllResturantDetails);//get restuarnt details
app.route('/AllReviewed').get(reviewedController.getALLReviewed);// get reviewed details
app.route('/ADDReviewed').post(reviewedController.addReview)//post the reviewed Userside forgien key might need to have an ideal
app.route('/ReviewedUpdate/:Update').put(reviewedController.updateReview)//pu te updateed review comment on the id of the existing
app.route('/ReviewedDelete/:Delete').delete(reviewedController.deleteReview)//deleting the reviewed based on id
app.route('/AllUserProfile').get(userprofileController.getAllUserProfile)// Get all userpofile details on sql databased
app.route('/AddUser').post(userprofileController.addUserProfile)//postto add new user 
app.route('/UpdateUser').put(userprofileController.UpdateUserProfile)// put for updating the user profile details
app.route('/DeleteUser').delete(userprofileController.DeleteUserProfile)// Delete the user profile details based on the existing id
app.route('/EthnicRestaurant').post(restuarntsController.getCuisinesResturant)//Get resturant starting with ethnic groups
app.route('/RestaurantRatingInDESC').get(restuarntsController.getResturantRateDESC)//get resturant in Descending order W3schools
app.route('/RestaurantRatingInASC').get(restuarntsController.getResturantRateASC)//get resturant in ascending order W3schools
app.route('/RestaurantInAlphabeticalOrder').get(restuarntsController.getRestaurantByAlphabeticalOrder)//get Restaurant in alphabetical order
app.route('/RestaurantInAlphabeticalDESCOrder').get(restuarntsController.getRestaurantByAlphabeticalOrderDESC)//get Restaurant in alphabetical order DESCENDING
app.route('/RestaurantSearch').post(restuarntsController.getRestaurantBySearch)//get Restaurant name/title by search
app.route('/UserAuth').post(userprofileController.GetUserAuthentications)//get user info from login Username/Password
app.route('/Usertoken').post(userprofileController.GetTokenUser)//get user token 
app.route('/imageUpload').post(userprofileController.distinctImage)//getting distict images
//////////////////////////////////////////
app.route('/NewUpdate').put(userprofileController.NewUpdating)
app.listen(8080, () => console.log("web servr running @ http://127.0.0.1:8080")); 

//MAKE SURE TO ctrl C to restart the server.js (node server.js)