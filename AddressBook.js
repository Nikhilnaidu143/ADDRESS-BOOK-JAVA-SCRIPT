console.log("---------WELCOME TO ADDRESS BOOK PROBLEM USING JAVA-SCRIPT---------");

class Contact{
    /** Variables. */
    firstName;
    lastName;
    address;
    city;
    state;
    zip_code;
    phone_number;
    email;

    /** Constructor */
    constructor(firstName , lastName , address , city , state , zip_code , phone_number , email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip_code = zip_code;
        this.phone_number = phone_number;
        this.email = email;
    }
}

/** Regex patterns. */
const PATTERN_NAME = /^[A-Z][A-Z a-z]{3,}$/;
const PATTERN_ADDRESS = /^[A-Z][A-Z a-z]{4,}$/;
const PATTERN_CITY = /^[A-Z][A-Z a-z]{4,}$/;
const PATTERN_STATE = /^[A-Z][A-Z a-z]{4,}$/;
const PATTERN_ZIP = /^[\d]{3}[\s]?[\d]{3}$/;
const PATTERN_PHONE = /^[\d]{2}(\s){1}[\d]{10}$/;
const PATTERN_EMAIL = /^[\w+-]+(\.[\w+-]+)*@[\w]+(\.[\w]+)?(?=(\.[A-Za-z_]{2,3}$|\.[a-zA-Z]{2,3}$)).*$/;

/** Array Intialization. */
var addressBook = new Array();

/** Adding contacts when validated with regex patterns. */
function addContacts(firstName , lastName , address , city , state , zip_code , phone_number , email){ 
    
    /** Duplicate check */
    addressBook.filter(person => person.firstName === firstName)
    .reduce( () => countPersons++ , countPersons = 0);
    if(countPersons > 0){
        console.log("OOPS! Contact with same first name as " + firstName + " is already exists.");
    }
    else{
        let result_firstName = PATTERN_NAME.test(firstName); 
        let result_lastName = PATTERN_NAME.test(lastName);
        let result_address = PATTERN_ADDRESS.test(address);
        let result_city = PATTERN_CITY.test(city);
        let result_state = PATTERN_STATE.test(state);
        let result_zip = PATTERN_ZIP.test(zip_code);
        let result_phoneNum = PATTERN_PHONE.test(phone_number);
        let result_email = PATTERN_EMAIL.test(email);

        if(result_firstName == true && result_lastName == true && result_address == true && result_city == true && 
        result_state == true && result_zip == true && result_phoneNum == true && result_email == true){

            let contact = new Contact(firstName , lastName , address , city , state , zip_code , phone_number , email);

            addressBook.push(contact);   //adding contacts to array.
        }
        else{
            throw "Please enter only valid contact details.";     //throwing error.
        }
    }
}

/** Editing contacts by using first name. */
function editContact(first_name , option , newValue){
    if(addressBook.length == 0){
        console.log("OOPS! Address Book is empty.");
    }
    else{
        addressBook.forEach(contact => {
            if(contact.firstName == first_name){  //edit contact if contact with firstname was found in the address book.
                switch(option){
                    case "firstName":
                        contact.firstName = newValue;
                        break;
                    case "lastName":
                        contact.lastName = newValue;
                        break;
                    case "address":
                        contact.address - newValue;
                        break;
                    case "city":
                        contact.city = newValue;
                        break;
                    case "state":
                        contact.state = newValue;
                        break;                   
                    case "zipCode":
                        contact.zip_code = newValue;
                        break;
                    case "phoneNum":
                        contact.phone_number = newValue;
                        break;
                    case "email":
                        contact.email = newValue;
                        break;
                    default:
                        console.log("Please choose valid option.");
                }
            }
        });
    }
}

/** Deleing contact from the address book array by first name. */
function deleteContact(first_name){
    if(addressBook.length == 0){
        console.log("OOPS! Address Book is empty.");
    }
    else{
        for(let i = 0; i < addressBook.length; i++){
            if(addressBook[i].firstName === first_name){    //delete contact by using splice method if contact found in the address book.
                addressBook.splice(i , 1);
                console.log("Successfully deleted contact with first name as " + first_name + " .");
            }
        }
    }
}

/** Counting number of contacts in the address book using reduce function. */
function numberOfContacts(){
    addressBook.reduce( () => {
        count++;
    },count = 0);
    console.log("Number of contacts in Address Book :- " + count);
}

/** Search person in a particular city or state. */
function searchPersonByCityOrState(choice , cityOrState){
    if(choice == "city" || choice == "City" || choice == "CITY"){
        person = addressBook.filter(contact => contact.city === cityOrState)
        .map(contact => contact.firstName);
        console.log(person);
    }
    else if(choice == "state" || choice == "State" || choice == "STATE"){
        person = addressBook.filter(contact => contact.state === cityOrState)
        .map(contact => contact.firstName);
        console.log(person);
    }
    else{
        console.log("OOPS! Please choose city or state only to search.");
    }
}

/** View person by city or state. */
function viewPersonByCityOrState(choice , cityOrState){
    if(choice == "city" || choice == "City" || choice == "CITY"){
        person = addressBook.filter(contact => contact.city === cityOrState)
        console.log(person);
    }
    else if(choice == "state" || choice == "State" || choice == "STATE"){
        person = addressBook.filter(contact => contact.state === cityOrState)
        console.log(person);
    }
    else{
        console.log("OOPS! Please choose city or state only to view.");
    }
}

/** Count persons by city or state. */
function countByCityOrState(choice , cityOrState){
    if(choice == "city" || choice == "City" || choice == "CITY"){
        addressBook.filter(contact => contact.city === cityOrState)
        .reduce( () => {count++;} , count = 0);
        
        console.log("Number of persons in " + cityOrState + " :- " + count);
    }
    else if(choice == "state" || choice == "State" || choice == "STATE"){
        addressBook.filter(contact => contact.state === cityOrState)
        .reduce( () => {count++;} , count = 0);
        
        console.log("Number of persons in " + cityOrState + " :- " + count);
    }
    else{
        console.log("OOPS! Please choose city or state only to count.");
    }
}

/** Sort contacts by using first name. */
function sortContactsByFirstName(){
    console.log(addressBook.sort((contact1 , contact2) => {
        if(contact1.firstName < contact2.firstName){
            return -1;
        }
        else if(contact1.firstName == contact2.firstName){
            return 0;
        }
        else{
            return 1;
        }
    }));
}

/** Calling function by passing parameters. */
addContacts("Nikhil","Sundarasetty","Pellur","Ongole","Andhra pradesh",523272,"91 9398359637","nikhilnaidu473@gmail.com");
addContacts("Bill","Gates","Newyork","America","America","400 008","91 9258566655","bill-gates@gmail.com");
console.log(addressBook);

/** Calling function by passing parameters for edit. */
editContact("Nikhil","state","Andhra");
console.log(addressBook);

/** Calling function by passing parameters for delete. */
deleteContact("Bill");
console.log(addressBook);

/** Adding one more contact. */
addContacts("Elon","Musk","StarBase","America","America",400005,"91 5555888822","elon-musk@gmail.com");
console.log(addressBook);

/** Calling function to find number of contacts in the address book. */
numberOfContacts();

/** Adding duplicate contact will not added to the address book. */
addContacts("Elon","Musk","StarBase","America","America",400007,"91 5555588822","elon-musk125@gmail.com");

/** Calling function to search persons in a particular city/state.*/
searchPersonByCityOrState("city" , "Ongole");

/** Calling function to view contact by city or state. */
viewPersonByCityOrState("state", "America");

/** Count number of persons in a particular city or state. */
countByCityOrState("CITY" , "Ongole");

/** Sorting contacts by using first name. */
sortContactsByFirstName();