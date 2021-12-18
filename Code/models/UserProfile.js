"use strict"

class Userprofile{
    constructor(UserID, UserName, FirstName, LastName, 
        Gender, Address, PhoneNumber, Email,PassWord, UserProfilePictures){
            this.UserID=UserID;
            this.UserName=UserName;
            this.FirstName=FirstName;
            this.LastName=LastName;
            this.Gender=Gender;
            this.Address=Address;
            this.PhoneNumber=PhoneNumber;
            this.Email=Email;
            this.PassWord=PassWord;
            this.UserProfilePictures=UserProfilePictures;
        }
        //Get method
        getUserID(){
            return this.UserID;
        }
        getUserName(){
            return this.UserName;
        }
        getFirstName(){
            return this.FirstName;
        }
        getLastName(){
            return this.LastName;
        }
        getGender(){
            return this.Gender;
        }
        getAddress(){
            return this.Address;
        }
        getPhoneNumber(){
            return this.PhoneNumber;
        }
        getEmail(){
            return this.Email;
        }
        getPassWord(){
            return this.PassWord
        }
        getUserProfilePictures(){
            return this.UserProfilePictures;
        }
        // Set method
        setUserName(){
            this.UserName =UserName;
        }
        setFirstName(){
            this.FirstName=FirstName;
        }
        setLastName(){
            this.LastName=LastName;
        }
        setGender(){
            this.Gender=Gender;
        }
        setAddress(){
             this.Address=Address;
        }
        setPhoneNumber(){
             this.PhoneNumber=PhoneNumber;
        }
        setEmail(){
            this.Email=Email;
        }
        setPassWord(){
            this.PassWord=PassWord;
        }
        setUserProfilePictures(){
            this.UserProfilePictures=UserProfilePictures;
        }
}
module.exports = Userprofile;