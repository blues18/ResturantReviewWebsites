"use strict"

var db=require('../data-based-connection');
const Userprofile = require('./UserProfile');
const USERAuthentications = require('./UserAUTH');
const { NULL } = require('mysql/lib/protocol/constants/types');
class UserProfileDB{
    getAllUserProfile(callback){
        var sql = "SELECT * FROM restuarntsdb.userprofiledata";    
        db.query(sql,callback)
    }
    addUseProfile(Userprofile,callback){
        var sql = "INSERT INTO userprofiledata(UserName, FirstName, LastName, Gender, Address, PhoneNumber, Email, PassWord, UserProfilePictures, UserDescription, UserWallpaper) VALUES(?,?,?,?,?,?,?,?,?,?,?)"
        db.query(sql,[Userprofile.getUserName() ,Userprofile.getFirstName(), Userprofile.getLastName(), Userprofile.getGender()
            , Userprofile.getAddress(), Userprofile.getPhoneNumber(), Userprofile.getEmail(),Userprofile.getPassWord(), null,null,null], callback);
    }
    DeleteUserProfile(DeleteUser,callback){
        var sql = "DELETE from userprofiledata WHERE UserID = ?";
        return db.query(sql,[DeleteUser],callback);
    }
    //Multiple placeholders
    GetUserAuthentications(UserAuth,callback){
        var sql = "SELECT * FROM userprofiledata WHERE UserName = ?";
        return db.query(sql,[UserAuth],callback);
        
    }
    GetTokenUser(UserToken,callback){
        var sql = "SELECT * FROM userprofiledata WHERE UserName = ?";
        return db.query(sql,[UserToken],callback);
    }
    distinctImage(User,callback){
        var sql = "SELECT distinct UserID,UserName,FirstName,LastName,Gender,Address,PhoneNumber,Email,PassWord,UserProfilePictures,UserDescription FROM userprofiledata WHERE UserName = ?";
        return db.query(sql,[User],callback);
    }
    NewUpdating(UserName,UserProfilePictures,FirstName,LastName,PassWord,Gender,Address,PhoneNumber,Email,UserDescription,callback){
        var sql = "UPDATE userprofiledata SET UserProfilePictures = ?,FirstName = ?,LastName = ?,PassWord = ?, Gender = ?, Address = ?, PhoneNumber = ?, Email = ?,UserDescription = ? WHERE UserName = ?";
        return db.query(sql,[UserProfilePictures,FirstName,LastName,PassWord,Gender,Address,PhoneNumber,Email,UserDescription, UserName],callback);
    }

    ////////////////////////////////////   
}   
module.exports=UserProfileDB;