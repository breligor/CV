
let form = document.querySelector('.CV_form');
let changedData = document.querySelectorAll('.changed');
let input = document.querySelectorAll('input');

form.onsubmit = function(evt) {
    evt.preventDefault();
    for (let i=0; i<=input.length; i++)
    changedData[i].textContent = input[i].value ;

};


