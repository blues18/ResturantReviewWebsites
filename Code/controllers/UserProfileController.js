"use strict"
const { json, send } = require('express/lib/response');
const Userdetails = require('../models/UserProfile');
const UserProfileDB = require('../models/UserProfileDB');
const Userlog = require('../models/UserAUTH');
const bcrypt = require('bcrypt');
var token = require('jsonwebtoken');
var verysecret = "secert"; 

var userprofileDB = new UserProfileDB();

function getAllUserProfile(request,respond){
    userprofileDB.getAllUserProfile(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function addUserProfile(request,respond){
    var userdetails = new Userdetails(null, request.body.UserName, request.body.FirstName, request.body.LastName, request.body.Gender
        , request.body.Address, request.body.PhoneNumber, request.body.Email, bcrypt.hashSync(request.body.PassWord,10), request.body.UserProfilePictures, 
        request.body.UserDescription, request.body.UserWallpaper);
    userprofileDB.addUseProfile(userdetails, function(error,result){
        if(error){
            respond.json(error);
            
        }
        else{
            respond.json(result);
            
        }
    })
};
function UpdateUserProfile(request,respond){
    var updateUserProfile = new Userdetails(parseInt(request.params.Update),request.body.UserName, request.body.FirstName, request.body.LastName, request.body.Gender
    , request.body.Address, request.body.PhoneNumber, request.body.Email, bcrypt.hashSync(request.body.PassWord,10), request.body.UserProfilePictures, 
    request.body.UserDescription, request.body.UserWallpaper);
    var owntoken = request.body.owntoken;
    userprofileDB.UpdateUserProfile(updateUserProfile, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function DeleteUserProfile(request,respond){
    var Deleteuserid = request.params.Delete;
    userprofileDB.DeleteUserProfile(Deleteuserid, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function GetUserAuthentications(request,respond){
    var Username = request.body.UserName;
    var Password = request.body.PassWord;
    userprofileDB.GetUserAuthentications(Username, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            //console.log(result[0].PassWord); 
            const hash = result[0].PassWord;
            var flag = bcrypt.compareSync(Password,hash);
            if (flag) {
                respond.json(result);
            } else {
                respond.json({result:"NO"});              
            }  
        }
    });
}
///////////////////////////////////////////////testing 
module.exports={getAllUserProfile,addUserProfile,UpdateUserProfile,DeleteUserProfile,GetUserAuthentications};
