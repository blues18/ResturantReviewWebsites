"use strict";
const { json } = require('express/lib/response');
const Reviewed = require('../models/RestuarntsReview');
const RestuarntsReviewDB = require('../models/RestuarntsReviewDB');

var ReviewedDB = new RestuarntsReviewDB();

function getALLReviewed(request,respond){
    ReviewedDB.getALLReviewed(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }      
    });
}
function addReview(request,respond){
    var now = new Date();
    var review = new Reviewed(null, request.body.RestuarntsReviewID, request.body.ReviewUserID, request.body.ReviewTitle, request.body.ReviewResturantsName, request.body.Ratings, request.body.RatingPrice,
        request.body.RatingFood, request.body.RatingService, request.body.ReviewComment, request.body.ReviewPhoto, request.body.ReviewRestuarntHyperLink
        ,request.body.ReviewByUserName, now.toString());
    ReviewedDB.addReview(review, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
};
function updateReview(request,respond){
    var now = new Date();
    var updateReview =new Reviewed(parseInt(request.params.Update), request.body.RestuarntsReviewID, request.body.ReviewUserID, request.body.ReviewTitle, request.body.ReviewResturantsName, request.body.Ratings, request.body.RatingPrice,
    request.body.RatingFood, request.body.RatingService, request.body.ReviewComment, request.body.ReviewPhoto, request.body.ReviewRestuarntHyperLink
    ,request.body.ReviewByUserName, now.toString());
    ReviewedDB.updateReview(updateReview,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
};
function deleteReview(request,respond){
    var ReviewID = request.params.Delete;
    ReviewedDB.deleteReview(ReviewID, function(error,results){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(results);
        }
        
    })
}

module.exports = {getALLReviewed,addReview,updateReview,deleteReview};
