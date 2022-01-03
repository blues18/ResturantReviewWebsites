" use strict";

var db= require('../data-based-connection');
const Reviewed = require('./RestuarntsReview');
class RestuarntsReviewDB{
    getALLReviewed(callback){
        var sql = "SELECT * FROM restuarntsdb.reviewrestaurant";
        db.query(sql,callback);
    }
    addReview(Reviewed,callback){
        var sql = "INSERT INTO reviewrestaurant(ReviewResturantsID,ReviewUserID, ReviewTitle, ReviewRestaurantName,Ratings, RatingPrice, RatingFood, RatingService, ReviewComment, ReviewPhoto, ReviewRestuarntHyperLink, ReviewByUserName, DatePost) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        db.query(sql,[Reviewed.getReviewResturantsID(),Reviewed.getReviewUserID(), Reviewed.getReviewTitle(), Reviewed.getReviewResturantsName(), Reviewed.getRatings(), Reviewed.getRatingsPrice(), Reviewed.getRatingFood(), Reviewed.getRatingService(), Reviewed. getReviewComment(), Reviewed.getReviewPhoto()
            ,Reviewed.getReviewRestuarntHyperLink(),Reviewed.getReviewByUserName(),Reviewed.getDatePost()], callback);
    }

    updateReview(Reviewed,callback){
        var sql="UPDATE reviewrestaurant SET ReviewTitle = ?, ReviewRestaurantName = ?, Ratings = ?, RatingPrice = ?, RatingFood = ?, RatingService = ?, ReviewComment = ?, ReviewPhoto = ?, ReviewRestuarntHyperLink = ?, ReviewByUserName = ?, DatePost = ? WHERE ReviewID = ?";
        return db.query(sql,[Reviewed.getReviewTitle(), Reviewed.getReviewResturantsName(), Reviewed.getRatings(), Reviewed.getRatingsPrice(), Reviewed.getRatingFood(), Reviewed.getRatingService(), Reviewed. getReviewComment(), Reviewed.getReviewPhoto()
            ,Reviewed.getReviewRestuarntHyperLink(),Reviewed.getReviewByUserName() ,Reviewed.getDatePost() ,Reviewed.getReviewID()], callback);
    }
    deleteReview(ReviewID,callback){
        var sql="DELETE from reviewrestaurant WHERE ReviewID=?";
        return db.query(sql,[ReviewID],callback)
    }
}
module.exports = RestuarntsReviewDB;