"use strict";

document.addEventListener('DOMContentLoaded', function(){
    const year = document.querySelector('#year');

    function date() {
       year.innerHTML = new Date().getFullYear();
    };

    date();
})
