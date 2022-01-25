function getReviewDetails(){
    var request = new XMLHttpRequest();    
	request.open('GET', AllReviewedURL, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the movies records into our review array        
	Reviewed_array = JSON.parse(request.responseText);        
	//Fetch the comments as well        
	//fetchComments();
	console.log(Reviewed_array) // output to console        
	//call the function so as to display all movies tiles for "Now Showing"        	
    displayReviewPost();    
};    
//This command starts the calling of the movies web api    
request.send();}

function  displayReviewPost(){
    var table = document.getElementById("ReviewsTable");
    var Review_Count = 0;
    var message = "";

    table.innerHTML = "";
    totalReviewPost = Reviewed_array.length;
    for (var count = 0; count < totalReviewPost; count++) {
            var reviewedimage = Reviewed_array [count].ReviewPhoto;
            var ReviewTitle = Reviewed_array [count].ReviewTitle;
            var Ratings = Reviewed_array [count].Ratings;
	var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + reviewedimage + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showMovieComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#movieModal" class="card-title" item="' + count + '" onClick="showMovieDetails(this)">' + ReviewTitle + '</h5></div>\
</div>'
            table.insertAdjacentHTML('beforeend', cell);
            Review_Count++;
        
    }
}
    message = movieCount + " Movies " + category;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";

