import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  people = [];
 
  constructor() {
    /* ====LOCALSTORAGE========
    Local storage stores data as key-value pairs, and the values are stored as "strings". 
    So, if we must JSON.stringify when we put them into LocalStorage and we must 'parse' the string into a valid object. when we retrieve it.
    */
    if (localStorage.people == null) {
      localStorage.setItem("people", JSON.stringify(this.people));
    }
  } //end constructor

// ARRAY OF OBJECTS
 UserArray = [
    {
      LicenceType: "Drivers Licence",
      LicenceNumber: "P123Y777"
    },
    {
      LicenceType: "Fishing Licence",
      LicenceNumber: "ZX23Y111"
    },
    {
      LicenceType: "Flying Licence",
      LicenceNumber: "fly3443hight"
    }
  ];

// FUNCTIONS
getUsers(){
  return this.UserArray
}


} // end class
//  People: {{people | json}}