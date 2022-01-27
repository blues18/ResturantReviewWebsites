function RestaurantCuisines1(){  
	var request = new XMLHttpRequest();    
	request.open('POST', "http://127.0.0.1:8080/EthnicRestaurant", true);    
    request.setRequestHeader("Content-Type", "application/json") 
	request.onload = function() {        
	  
    Restaurant_array = JSON.parse(request.responseText);   
    displaythisRestaurant()     
    console.log(Restaurant_array)        	
    };

    var findthisCurisin = document.getElementById("thisCuisines").value;
    var payload = {EthnicRestaurant:findthisCurisin};
    request.send(JSON.stringify(payload));
}  

function RestaurantCuisines2(){  
	var request = new XMLHttpRequest();    
	request.open('POST', "http://127.0.0.1:8080/EthnicRestaurant", true);    
    request.setRequestHeader("Content-Type", "application/json") 
	request.onload = function() {        
	  
    Restaurant_array = JSON.parse(request.responseText);   
    displaythisRestaurant()     
    console.log(Restaurant_array)        	
    };

    var findthisCurisin = document.getElementById("thisCuisines2").value;
    var payload = {EthnicRestaurant:findthisCurisin};
    request.send(JSON.stringify(payload));
}  

function RestaurantCuisines3(){  
	var request = new XMLHttpRequest();    
	request.open('POST', "http://127.0.0.1:8080/EthnicRestaurant", true);    
    request.setRequestHeader("Content-Type", "application/json") 
	request.onload = function() {        
	  
    Restaurant_array = JSON.parse(request.responseText);   
    displaythisRestaurant()     
    console.log(Restaurant_array)        	
    };

    var findthisCurisin = document.getElementById("thisCuisines3").value;
    var payload = {EthnicRestaurant:findthisCurisin};
    request.send(JSON.stringify(payload));
} 

function RestaurantCuisines4(){  
	var request = new XMLHttpRequest();    
	request.open('POST', "http://127.0.0.1:8080/EthnicRestaurant", true);    
    request.setRequestHeader("Content-Type", "application/json") 
	request.onload = function() {        
	  
    Restaurant_array = JSON.parse(request.responseText);   
    displaythisRestaurant()     
    console.log(Restaurant_array)        	
    };

    var findthisCurisin = document.getElementById("thisCuisines4").value;
    var payload = {EthnicRestaurant:findthisCurisin};
    request.send(JSON.stringify(payload));
}  
  
  






