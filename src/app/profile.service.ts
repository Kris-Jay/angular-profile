import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile: UserProfile={
    name:"Kris",
    contact:"248-248-2480",
    bio:"I can't do a handstand",
  };
  constructor() { }

  getUserProfile=()=>{
    return this.userProfile;
  };


  setUserProfile=(newUserProfile:UserProfile):void=>{
    this.userProfile = newUserProfile;
  };
  // returning void just to set values of userprofile
}
