"use strict"

class USERAuthentications{
    constructor(UserName,PassWord){
        this.UserName = UserName;
        this.PassWord = PassWord;
    }
    //Get Metheod
    getUserName(){
        return this.UserName;
    }
    getPassWord(){
        return this.PassWord;
    }
    //Set method 
    setUserName(){
        this.UserName=UserName;
    }
    setPassWord(){
        this.PassWord=PassWord;
    }
}
module.exports = USERAuthentications;