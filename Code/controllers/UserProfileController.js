"use strict"
const { json, send } = require('express/lib/response');
const Userdetails = require('../models/UserProfile');
const UserProfileDB = require('../models/UserProfileDB');

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
        , request.body.Address, request.body.PhoneNumber, request.body.Email,request.body.PassWord, request.body.UserProfilePictures, 
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
    , request.body.Address, request.body.PhoneNumber, request.body.Email, request.body.PassWord, request.body.UserProfilePictures, 
    request.body.UserDescription, request.body.UserWallpaper);
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
    var Deleteuserid = request.params.id;
    userprofileDB.DeleteUserProfile(Deleteuserid, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function GetCertainUser(request,respond){
    var getuser = request.params.Password;
    userprofileDB.GetCertainUser(getuser, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function GetUserAuth(request,respond){
    var loginAuth = new Userdetails(request.body.UserName,request.body.PassWord)//might be missing parseINT(request.params.Update)
    userprofileDB.GetUserAuth(loginAuth, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function SingleAuth(request,respond){
    var SingleLog = new Userdetails(request.body.UserName)
    userprofileDB.SingleAuth(SingleLog,function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
module.exports={getAllUserProfile,addUserProfile,UpdateUserProfile,DeleteUserProfile,GetCertainUser,GetUserAuth,SingleAuth};