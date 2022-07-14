/* ask user to input name and number
    stores them in var a and b
    checks if var a and var b is empty
    shows alert message with appropriate
    message if it is empty or full
*/
function appointment(){
    var a= prompt("Enter your Full name");  //ask user to input data
    var b= prompt("Enter your number");
    if(a =="" || b =="" ){                  //check if var is empty
        alert("Please fill all the form");
    }
    else{
        alert("meeting set after 2 days");
    }
}

/* get the content of the form and store in
respective variable.
checks if variable are empty
shows alert message
if not empty 
shows appropriate message
*/
function validateForm(){
    var fname = document.forms["contactform"]["firstname"].value;  //get the HTML content of the forms
    var lname= document.forms["contactform"]["lastname"].value;
    var mail= document.forms["contactform"]["Email"].value;
    var customer= document.forms["contactform"]["customer?"].value;
    var message= document.forms["contactform"]["message"].value;

    if (fname=="" || lname=="" || mail=="" || customer=="" || message=="" ){  //checks if var are empty

        alert("Please fill all the form");
    }
    else {

        alert("We will get to you shortly");
    }

}
