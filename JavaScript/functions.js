
"use strict";

document.addEventListener('DOMContentLoaded', function(){
   
    const year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;

    const updated = new Date(document.lastModified);
    const updatedf = updated.getMonth()+1 + '-' + updated.getDate() + '-' + updated.getFullYear();
     document.getElementById("lastUpdated").innerHTML = updatedf;

})
