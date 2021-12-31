console.log("---------WELCOME TO ADDRESS BOOK PROBLEM USING JAVA-SCRIPT---------");

class Contact{
    /** Variables. */
    first_name;
    last_name;
    address;
    city;
    state;
    zip_code;
    phone_number;
    email;

    /** Constructor */
    constructor(first_name , last_name , address , city , state , zip_code , phone_number , email){
        this.first_name = first_name;
        this.last_name = last_name;
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

/** Adding contacts when validated with regex patterns. */
function addContacts(firstName , lastName , address , city , state , zip_code , phone_number , email){ 
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

        console.log("Contact validated successfully.")
    }
    else{
        throw "Please enter only valid contact details.";     //throwing error.
    }
}

/** Calling function by passing parameters. */
addContacts("Nikhil","Sundarasetty","Pellur","Ongole","Andhra pradesh",523272,"91 9398359637","nikhilnaidu473@gmail.com");
