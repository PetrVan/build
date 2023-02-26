/* Čístý javascript
button = document.querySelector('#button');
modal = document.querySelector('#modal');
close = document.querySelector('#close');

button.addEventListener('click', function(){
    modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});
*/
$(document).ready(function(){
    button = $('#button');
    modal = $('#modal');
    close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });
});