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
      LicenceType: "C LRN",
      LicenceNumber: "19337618",
      DOB: "12/03/1995",
      ExpDate: "12/08/2021",
      CardNumber: "1249358765",
      ConfirmationNo: "03798435",
      Address: "15 Smith Street, Sydney",
      HolderName: "Jerry Sine FIELD"

    },
    {
      LicenceType: "C LRN",
      LicenceNumber: "12546983",
      DOB: "12/03/1995",
      ExpDate: "12/08/2021",
      CardNumber: "0825469132",
      ConfirmationNo: "12479563",
      Address: "117 Space Street, Sydney",
      HolderName: "John Spar TAN"
    },
    {
      LicenceType: "C LRN",
      LicenceNumber: "13496578",
      DOB: "12/03/1995",
      ExpDate: "12/08/2021",
      CardNumber: "12879456385",
      ConfirmationNo: "19764328",
      Address: "06 Bravo Avenue, Sydney",
      HolderName: "John PRICE"
    }
  ];

// FUNCTIONS
getUsers(){
  return this.UserArray
}


} // end class
//  People: {{people | json}}