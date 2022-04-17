
$(document).ready(function() {

    // handle click on Join List button
    $('form').on( 'submit', function(e) {
        // validate the first email address
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "" || email == "null") { 
            $("#email").next().text("required");
            e.preventDefault();
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            e.preventDefault();
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
        
        // validate the first name entry 
        const firstName = $("#fname").val().trim(); 
        if (firstName == "" || firstName == "null") {
            $("#fname").next().text("First name is required.");
            e.preventDefault();
        } else {
            $("#fname").next().text("");
        }
        $("#fname").val(firstName);

        // validate the last name entry 
        const lastName = $("#lname").val().trim(); 
        if (lastName == "" || lastName == "null") {
            $("#lname").next().text("Last name is required.");
            e.preventDefault();
        } else {
            $("#lname").next.text("");
        }
        $("#lname").val(lastName);
    });
});