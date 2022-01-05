"use strict"
const { json } = require('express/lib/response');
const RestuarntsDetailsDB = require('../models/RestuarntsDetailsDB'); //file path
const RestaurantCuisines = require('../models/RestaurntsCuisines'); //file path for Cuisines
const RestaurantSEARCH = require('../models/RestaurantSEARCH'); // file path for search constructor 

var restuarntsDetailsDB = new RestuarntsDetailsDB();

function getAllResturantDetails(request, respond){
    restuarntsDetailsDB.getAllResturantDetails(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getCuisinesResturant(request,respond){
    var resturantethnic = new RestaurantCuisines(request.body.EthnicRestaurant);
    restuarntsDetailsDB.getCuisinesResturant(resturantethnic,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function getResturantRateDESC(request,respond){
    restuarntsDetailsDB.getResturantRateDESC(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function getResturantRateASC(request,respond){
    restuarntsDetailsDB.getResturantRateASC(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function getRestaurantByAlphabeticalOrder(request,respond){
    restuarntsDetailsDB. getRestaurantByAlphabeticalOrder(function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
function getRestaurantBySearch(request,respond){
    var restaurantSearch = new RestaurantSEARCH(request.body.RestaurantTitle);
    restuarntsDetailsDB.getRestaurantBySearch(restaurantSearch,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}
module.exports = {getAllResturantDetails,getCuisinesResturant,getResturantRateDESC,getResturantRateASC,getRestaurantByAlphabeticalOrder,getRestaurantBySearch};