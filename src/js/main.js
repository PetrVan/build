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

//jquery
$(document).ready(function(){


    // Napojení knihovny wow.js
    new WOW().init();


    button = $('#button');
    modal = $('#modal');
    close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });

    // Validace formulářů
    $('#brief-form').validate({
      rules: {
        username: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        username: "Uveďte Vaše jméno",
        phone: "Uveďte Váš telefon",
        email: {
          required: "Potřebujeme Vaši emailouvou adresu",
          email: "Vaše adresa musí být ve správném formátu"
        }
      }

    });

    // Napojení slideru
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
            ]
    });
});