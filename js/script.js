import { sendData } from './contact_service.js';
import { showPersistedData } from './contact_service.js';
// provide the validation code here
//Provide the solution code here


let contacts = [];

// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.
document.getElementById('addContactNo').onclick = (event) => { 
    event.preventDefault();
    event.stopPropagation();
    if (document.getElementById('additionalContactNumbers')){
        document.getElementById('additionalContactNumbers').remove();
        event.originalTarget.innerText = '+';
    }
    else{       
    let div = document.createElement("div");
    div.className = "row";
    div.id = "additionalContactNumbers";
    div.innerHTML = `<div class="col-md-6">
    <input class="form-control form-control-sm" name="contact1" id="contact1"
        placeholder="Contact No 1">
    <small id="contactNo1Error"></small>
    </div>
    <div class="col-md-6">
    <input class="form-control form-control-sm" name="contact2" id="contact2"
        placeholder="Contact No 2">
    <small id="contactNo2Error"></small>
    </div>`;
    event.originalTarget.parentElement.insertAdjacentElement("afterend", div);
    event.originalTarget.innerText = '-';
    }
};



//console.log(document.('input[value = "Submit"]'));
const submitContact = (event) => {
    event.preventDefault();
    //contact object captures all the inputs provided
    let contact={
        FirstName : document.getElementById('firstname').value,        
        Email : document.getElementById('email').value,
        HomeNumber : document.getElementById('homeNo').value,        
    }
    let errors = {
        firstNameError : checkFirstName(document.getElementById('firstname').value),        
        emailError : checkEmail(document.getElementById('email').value),
        homeNoError : checkHomeNumber(document.getElementById('homeNo').value),        
    }
    if(document.getElementById('lastname') != null){
        if(document.getElementById('lastname').value != ''){
            contact.LastName = document.getElementById('lastname').value;
            errors.lastNameError = checkLastName(document.getElementById('lastname').value);
        }
    }
    if(document.getElementById('workNo') != null){
        if(document.getElementById('workNo').value != ''){
            contact.WorkNumber = document.getElementById('workNo').value;
            errors.workNoError = checkWorkNumber(document.getElementById('workNo').value);
        }
    }
    if(document.getElementById('contact1') != null){
        if(document.getElementById('contact1').value != ''){
            contact.AdditionalContactNo1 = document.getElementById('contact1').value;
            errors.contactNo1Error = checkAdditionalNumber1(document.getElementById('contact1').value);
        }
    }
    if(document.getElementById('contact2') != null){
        if(document.getElementById('contact2').value != ''){
            contact.AdditionalContactNo2 = document.getElementById('contact2').value;
            errors.contactNo2Error = checkAdditionalNumber2(document.getElementById('contact2').value);
        }
    }
    if(document.getElementById('birthdate') != null){
        if(document.getElementById('birthdate').value != ''){
            contact.birthDate = document.getElementById('birthdate').value;
        }
    }

    if(document.getElementById('company') != null){
        if(document.getElementById('company').value != ''){
            contact.company = document.getElementById('company').value;
        }
    }

    if(document.getElementById('jobTitle') != null){
        if(document.getElementById('jobTitle').value != ''){
            contact.jobTitle = document.getElementById('jobTitle').value;
        }
    }

    if(document.getElementById('notes') != null){
        if(document.getElementById('notes').value != ''){
            contact.notes = document.getElementById('notes').value;
            errors.notesError = checkNotes(document.getElementById('notes').value);
        }
    }
    //errors object captures all the validation errors

    //display validation summary with error messages
    displayErrorMessagesAlongsideFields(errors);
    let errorMessages = Object.values(errors).filter(error => error != '');
    if(errorMessages.length > 0){
        displayErrorMessages(errorMessages);
    }
    else
         sendData(contact);
    //if no errors, push the contact to contacts array

    //contacts can be logged on to console, or can even be updated on UI
    //console.log(contacts);
};

document.getElementsByTagName('form')[0].onsubmit = submitContact;
document.getElementById('fetchData').onclick=showPersistedData;
// function init(){document.getElementById('submit').onclick = submitContact.bind(null, event)};
// init();


//console.log(document.querySelector('#validationSummary > ul'));
//function to display validation summary with error messages provided
function displayErrorMessages(errorMessages){
    let vs = document.querySelector('#validationSummary > ul');
    vs.innerHTML = '';
    errorMessages.forEach(errorMessage => {vs.innerHTML+= '<li>' + errorMessage + '</li>'});
};

//function to display error messages alongside the input fields
const displayErrorMessagesAlongsideFields = (errors) =>{
    let errorsKeyArray = Object.keys(errors);
    [...document.getElementsByTagName('small')].forEach(i => i.innerText = '');
    for(let i of errorsKeyArray){
        if(errors[i] != '')
                       document.getElementById(i).innerText = '*';
    }
    
};



//function to validate firstName
function checkFirstName(string){
    return (/^[a-zA-Z.]+$/.test(string)) ? '' : `First name can only contain alphabets and .`;
    };

//function to validate lastName
function checkLastName(string){
    return (/^[a-zA-Z.]+$/.test(string)) ? '' : `Last name can only contain alphabets and .`;
    };

//function to validate email
function checkEmail(string){
return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(string)) ? '' : `Email is not valid`;
};

//function to validate home no
function checkHomeNumber(string) {
    const a = /^\+91[\s]{0,1}[\(]{0,1}099[\)\s\.-]{0,1}[\s-]{0,1}999[\s\.-]{0,1}9999/.test(string);
    return a ? '' : 'Home Number is not in correct format';
};
//function to validate work no
function checkWorkNumber(string) {
    const a = /^\+91[\s]{0,1}[\(]{0,1}099[\)\s\.-]{0,1}[\s-]{0,1}999[\s\.-]{0,1}9999/.test(string);
    return a ? '' : 'Work Number is not in correct format';
};
//function to validate additional contact no
function checkAdditionalNumber1(string) {
    const a = /^\+91[\s]{0,1}[\(]{0,1}099[\)\s\.-]{0,1}[\s-]{0,1}999[\s\.-]{0,1}9999/.test(string);
    return a ? '' : 'Additional Contact Number 1 is not in correct format';
};
//function to validate additional contact no
function checkAdditionalNumber2(string) {
    const a = /^\+91[\s]{0,1}[\(]{0,1}099[\)\s\.-]{0,1}[\s-]{0,1}999[\s\.-]{0,1}9999/.test(string);
    return a ? '' : 'Additional Contact Number 2 is not in correct format';
};
//function to validate notes
function checkNotes(string) {
    return (string.length <= 200) ? '' : 'Notes is over 200 words';
};
//disable all dates for whom age is less than 18
let currentyear = parseInt(new Date().getFullYear());
let currentmonth = parseInt(new Date().getMonth());
currentmonth++;
let currentdate = parseInt(new Date().getDate());

let year = currentyear-15;
let month = (currentmonth<10)?'0'+currentmonth : currentmonth;
let date = (currentdate<10)?'0'+currentdate : currentdate;
let maxdate = year + "-" + month + "-" + date;

let calender = document.getElementById('birthdate');
calender.setAttribute("max",maxdate);

