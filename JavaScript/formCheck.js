
$(document).ready(function() {

    // handle click on Join List button
    $('form').on( 'submit', function(e) {
        // validate the first email address
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "" || email == "null") { 
            $("#emailRequired").text("* REQUIRED");
            e.preventDefault();
        } else if ( !emailPattern.test(email) ) {
            $("#emailRequired").next().text("Must be a valid email address.");
            e.preventDefault();
        } else {
            $("#emailRequired").text("");
        }
        $("#email").val(email);
        
        // validate the first name entry 
        const firstName = $("#fname").val().trim(); 
        if (firstName == "" || firstName == "null") {
            $("#fnameRequired").text("* REQUIRED");
            e.preventDefault();
        } else {
            $("#fnameRequired").text("");
        }
        $("#fname").val(firstName);

        // validate the last name entry 
        const lastName = $("#lname").val().trim(); 
        if (lastName == "" || lastName == "null") {
            $("#lnameRequired").text("* REQUIRED");
            e.preventDefault();
        } else {
            $("#lnameRequired").text("");
        }
        $("#lname").val(lastName);
    });
});