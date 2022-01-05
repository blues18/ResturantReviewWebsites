"use strict"
class RestaurantCuisines{
    constructor(EthnicRestaurant){
        this.EthnicRestaurant=EthnicRestaurant;
    }
    getEthnicRestaurant(){
        return this.EthnicRestaurant;
    }
    setEthnicRestaurant(){
        this.EthnicRestaurant = EthnicRestaurant;
    }
} 
module.exports = RestaurantCuisines;
    