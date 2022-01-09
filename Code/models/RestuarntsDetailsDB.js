"use strict";

var db = require('../data-based-connection');
const RestaurantCuisines = require('./RestaurntsCuisines');
class RestuarntsDetailsDB{
    getAllResturantDetails(callback){
        var sql = "SELECT * FROM restuarntsdb.restaurantdetails";
        db.query(sql,callback);     
    }
    getCuisinesResturant(ethnic,callback){
        var sql = "SELECT * FROM restaurantdetails WHERE EthnicRestaurant = ?";
        return db.query(sql,[ethnic.getEthnicRestaurant()],callback);
    } 
    getResturantRateDESC(callback){
        var sql ="SELECT * FROM restaurantdetails ORDER BY Ratings DESC";
        return db.query(sql,callback);
    }
    getResturantRateASC(callback){
        var sql ="SELECT * FROM restaurantdetails ORDER By Ratings ASC";
        return db.query(sql,callback);
    }
    getRestaurantByAlphabeticalOrder(callback){
        var sql ="SELECT * FROM restaurantdetails ORDER BY RestaurantTitle ASC";
        return db.query(sql,callback);
    }
    getRestaurantByAlphabeticalOrderDESC(callback){
        var sql ="SELECT * FROM restaurantdetails ORDER BY RestaurantTitle DESC";
        return db.query(sql,callback);
    }
    getRestaurantBySearch(Search,callback){
        var sql ="SELECT * FROM restaurantdetails WHERE RestaurantTitle = ?";
        return db.query(sql,[Search.getRestaurantTitle()],callback);
    }
}
module.exports = RestuarntsDetailsDB;

//how to store images ?