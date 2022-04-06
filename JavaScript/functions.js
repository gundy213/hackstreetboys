
"use strict";

document.addEventListener('DOMContentLoaded', function(){
   
    const year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;

    const updated = new Date(document.lastModified);
    document.getElementById("lastUpdated").innerHTML = updated;

})
