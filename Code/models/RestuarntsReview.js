"use strict";

class Reviewed{
    constructor(ReviewID,ReviewResturantsID,ReviewUserID, ReviewTitle, ReviewRestaurantName, Ratings, RatingPrice, RatingFood, 
        RatingService, ReviewComment, ReviewPhoto, ReviewRestuarntHyperLink, ReviewByUserName, DatePost){
        this.ReviewID=ReviewID;
        this.ReviewResturantsID=ReviewResturantsID;
        this.ReviewUserID=ReviewUserID;
        this.ReviewTitle=ReviewTitle;
        this.ReviewResturantsName=ReviewRestaurantName;
        this.Ratings=Ratings;
        this.RatingsPrice=RatingPrice;
        this.RatingFood= RatingFood;
        this.RatingService=RatingService;
        this.ReviewComment=ReviewComment;
        this.ReviewPhoto=ReviewPhoto;
        this.ReviewRestuarntHyperLink=ReviewRestuarntHyperLink;
        this.ReviewByUserName=ReviewByUserName;
        this.DatePost=DatePost;
        }
        // below is add set and get method
        //get method
        getReviewID(){
            return this.ReviewID;
        }
        getReviewResturantsID(){
            return this.ReviewResturantsID;
        }
        getReviewUserID(){
            return this.ReviewUserID;
        }
        getReviewTitle(){
            return this.ReviewTitle;
        }
        getReviewResturantsName(){
            return this.ReviewResturantsName;
        }
        getRatings(){
            return this.Ratings;
        }
        getRatingsPrice(){
            return this.RatingsPrice;
        }
        getRatingFood(){
            return this.RatingFood;
        }
        getRatingService(){
            return this.RatingService;
        }
        getReviewComment(){
            return this.ReviewComment;
        }
        getReviewPhoto(){
            return this.ReviewPhoto;
        }
        getReviewRestuarntHyperLink(){
            return this.ReviewRestuarntHyperLink;
        }
        getReviewByUserName(){
            return this.ReviewByUserName;
        }
        getDatePost(){
            return this.DatePost;
        }
        // Set method//////////////////////////////////////////////////////////////
        setReviewResturantsID(){
            this.ReviewResturantsID = ReviewResturantsID;
        }
        setReviewUserID(){
            this.ReviewUserID = ReviewUserID;
        }
        setReviewTitle(){
            this.ReviewTitle = ReviewTitle;
        }
        setReviewResturantsName(){
            this.ReviewResturantsName = ReviewResturantsName;
        }
        setRatings(){
            this.Ratings = Ratings;
        }
        setRatingsPrice(){
            this.RatingsPrice = RatingsPrice;
        }
        setRatingFood(){
            this.RatingFood = RatingFood;
        }
        setRatingService(){
            this.RatingService = RatingService;
        }
        setReviewComment(){
            this.ReviewComment = ReviewComment;
        }
        setReviewPhoto(){
            this.ReviewPhoto = ReviewPhoto;
        }
        setReviewRestuarntHyperLink(){
            this.ReviewRestuarntHyperLink = ReviewRestuarntHyperLink;
        }
        setReviewByUserName(){
            this.ReviewByUserName = ReviewByUserName;
        }
        setDatePost(){
            this.DatePost = DatePost;
        }}
        module.exports = Reviewed;