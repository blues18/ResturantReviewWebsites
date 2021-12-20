"use strict";
const RestuarntsDetailsDB = require('../models/RestuarntsDetailsDB'); //file path

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
function getEthnicResturant(request,respond){
    var resturantethnic = request.params.ethnic; 
    restuarntsDetailsDB.getEthnicResturant(resturantethnic,function(error,result){
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

module.exports = {getAllResturantDetails,getEthnicResturant,getResturantRateDESC,getResturantRateASC,getRestaurantByAlphabeticalOrder};