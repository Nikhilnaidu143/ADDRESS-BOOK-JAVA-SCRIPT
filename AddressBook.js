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

/** Contact objects */
let contact1 = new Contact("nikhil","sundarasetty","pellur","ongole","AP",523272,9398359637,"nikhilnaidu473@gmail.com");
let contact2 = new Contact("Bill","gates","new-york","us","USA",40008,52336688,"bill-gates@gmail.com");