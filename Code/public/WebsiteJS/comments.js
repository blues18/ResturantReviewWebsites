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
function Review(this) {
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
