"use strict"
class RestaurantSEARCH{
    constructor(RestaurantTitle){
        this.RestaurantTitle=RestaurantTitle;
    }
    getRestaurantTitle(){
        return this.RestaurantTitle;
    }
    setRestaurantTitle(){
        this.RestaurantTitle = RestaurantTitle;
    }
}
module.exports = RestaurantSEARCH;