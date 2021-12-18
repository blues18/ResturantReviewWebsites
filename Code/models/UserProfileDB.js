"use strict"

var db=require('../data-based-connection');
const Userprofile = require('./UserProfile');
class UserProfileDB{
    getAllUserProfile(callback){
        var sql = "SELECT * FROM restuarntsdb.userprofiledata";    
        db.query(sql,callback)
    }
    addUseProfile(Userprofile,callback){
        var sql = "INSERT INTO userprofiledata(UserName, FirstName, LastName, Gender, Address, PhoneNumber, Email, PassWord, UserProfilePictures) VALUES(?,?,?,?,?,?,?,?,?)"
        db.query(sql,[Userprofile.getUserName() ,Userprofile.getFirstName(), Userprofile.getLastName(), Userprofile.getGender()
            , Userprofile.getAddress(), Userprofile.getPhoneNumber(), Userprofile.getEmail(),Userprofile.getPassWord(), Userprofile. getUserProfilePictures()], callback);
    }
    UpdateUserProfile(UpdateUser,callback){
        var sql = "UPDATE userprofiledata SET UserName = ?, FirstName = ?, LastName = ?, Gender = ?, Address = ?, PhoneNumber = ?, Email = ?, PassWord = ?, UserProfilePictures = ? WHERE UserID = ?";
        return db.query(sql,[UpdateUser.getUserName() ,UpdateUser.getFirstName(), UpdateUser.getLastName(), UpdateUser.getGender()
            , UpdateUser.getAddress(), UpdateUser.getPhoneNumber(), UpdateUser.getEmail(), UpdateUser.getPassWord(), UpdateUser. getUserProfilePictures(), UpdateUser.getUserID()], callback);
    }
    DeleteUserProfile(DeleteUser,callback){
        var sql = "DELETE from userprofiledata WHERE UserID = ?";
        return db.query(sql,[DeleteUser],callback);
    }
    GetCertainUser(getuser,callback){
        var sql = "SELECT * FROM userprofiledata WHERE PassWord = ?";
        return db.query(sql,[getuser],callback);
    }
    //Multiple placeholders
    GetUserUsingMultiplePlaceHolders(getMutiple,callback){
        var sql = "SELECT * FROM userprofiledata WHERE UserName = ? AND PassWord = ?";
        return db.query(sql[getMutiple],callback);
    }
}
module.exports=UserProfileDB;