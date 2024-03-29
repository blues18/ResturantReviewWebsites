"use strict"
const { json, send } = require('express/lib/response');
const Userdetails = require('../models/UserProfile');
const UserProfileDB = require('../models/UserProfileDB');
const Userlog = require('../models/UserAUTH');
const bcrypt = require('bcrypt');
const fileupload = require('express-fileupload');
var jwt = require('jsonwebtoken');
const { setCharset } = require('express/lib/utils');
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

function DeleteUserProfile(request,respond){
    var Deleteuserid = request.body.Deleteuserid;
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
function GetTokenUser(request,respond){
    var username = request.body.UserName;
    var password = request.body.PassWord;
    userprofileDB.GetTokenUser(username, function(error,result){
        if(error){
            respond.json(error);
        }
        else{
            const hash = result[0].PassWord;
            var flag = bcrypt.compareSync(password,hash);
            if (flag) {
                //var token = jwt.sign({username,verysecret},"Stack",{expiresIn:"1800s"})  //expires in 30mins
                var token = jwt.sign(username,verysecret)
                respond.json({result:token,username});
            } else {
                respond.json({result:"Invaild Token"});              
            }  
        }
    });
}

function distinctImage(request,respond){
    var token = request.body.Token;
    try {
        var decoded = jwt.verify(token,verysecret);
        userprofileDB.distinctImage(decoded, function(error,result){
            if(error){
                respond.json(console.log("failed"));
            }
            else{
                respond.json(result);
            }
        });       
    } catch (error) {
        respond.json({result:"invaild token"});
    }
}
function NewUpdating(request,respond){
    var UserProfilePictures = request.body.UserProfilePictures;
    var FirstName = request.body.FirstName;
    var LastName = request.body.LastName;
    var PassWord =  bcrypt.hashSync(request.body.PassWord,10);
    var Gender = request.body.Gender;
    var Address = request.body.Address;
    var PhoneNumber = request.body.PhoneNumber;
    var Email = request.body.Email;
    var UserDescription = request.body.UserDescription;
    var token = request.body.Token;
    try {
        var decoded = jwt.verify(token,verysecret);
        userprofileDB.NewUpdating(decoded,UserProfilePictures,FirstName,LastName,PassWord,Gender,Address,PhoneNumber,Email,UserDescription, function(error,result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });       
    } catch (error) {
        respond.json({result:"invaild token"});
    }
}

 

///////////////////////////////////////////////testing 
module.exports={getAllUserProfile,addUserProfile,DeleteUserProfile,GetUserAuthentications,GetTokenUser,distinctImage,NewUpdating};
