function restaurantsReview(){
    var request = new XMLHttpRequest();
    request.open('GET', AllReviewedURL, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    Reviewed_array = JSON.parse(request.responseText);
    console.log(Reviewed_array);
    };

    request.send();
}
//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function getReview(this) {
    document.getElementById("emptyReview").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + Restaurant_array[item].ReviewTitle;
    document.getElementById("NewReview").textContent = "";

    for (var i = 0; i < Reviewed_array.length; i++) {
        if (Reviewed_array[i].movie=== Restaurant_array[item].title) {
            document.getElementById("emptyReview").innerHTML = "";
            selectedReviewId = Restaurant_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
            <div class="card">                                                                                  \
                <div class="card-body">                                                                         \
                    <p class="card-text" id="rating' + i + '">' + Reviewed_array[i].ReviewTitle + "</p>               \
                    <small>by " + Reviewed_array[i].ReviewByUserName + " @ " + Reviewed_array[i].DatePost + "</small>   \
                </div>                                                                                          \
            </div>                                                                                              \
        </div>";
        document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);
        
        var star = "";
        for (var j = 0; j < Reviewed_array[i].Ratings; j++) {
            console.log(i);
            star += "<img src='image for background and etc/640px-Golden_star.svg' style='width:50px' />";
        }
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");    
        }
    }
}
function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
        rating = 0;
        document.getElementById("userComments").value = "";
        document.getElementById("Username").value = "";
    }
// Submit or send the new comment to the server to be added.
function addingReview() {
    var reviewrestaurant = new Object();
    reviewrestaurant.ReviewResturantsID = Restaurant_array[currentIndex].RestaurantID; // Movie ID is required by server to create new comment
    //reviewrestaurant.ReviewResturantsID = Userprofile_array[current_index].UserprofileID 
    reviewrestaurant.ReviewTitle = Restaurant_array[currentIndex].RestaurantTitle; // Movie title is required by server to create new comment
    reviewrestaurant.ReviewByUserName = document.getElementById("Username").value; // Value from HTML input text
    reviewrestaurant.ReviewComment = document.getElementById("userComments").value; // Value from HTML input text
    reviewrestaurant.DatePost = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    reviewrestaurant.rating = rating;

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", Addreview, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function() {
        	console.log("new comment sent");
    restaurantsReview(); // fetch all comments again so that the web page can have updated comments.     
    };
// Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comment)); 
}
//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var starRatings = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let star of starRatings){
        star.setAttribute("src", StarBWimage);
    }
    changeStarimage(num, classTarget);
}
// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changeStarimage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", Starimage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", Starimage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", Starimage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", Starimage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", Starimage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", Starimage);
            rating = 5;
            break;
    }
}