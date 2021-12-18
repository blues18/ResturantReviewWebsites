"use strict";

var db = require('../data-based-connection');
class RestuarntsDetailsDB{
    getAllResturantDetails(callback){
        var sql = "SELECT * FROM restuarntsdb.restaurantdetails";
        db.query(sql,callback);     
    }
    getEthnicResturant(ethnic,callback){
        var sql = "SELECT * FROM restaurantdetails WHERE EthnicRestaurant = ?";
        return db.query(sql,[ethnic],callback);
        }
    } 
module.exports = RestuarntsDetailsDB;
