$(document).ready(function(){
  new WOW().init();
  
  var side = $('#side-bar');
  var sideActive = $('#side-active');
  var sideClose = $('#side-close');

  sideActive.on('click', function () {
    side.addClass('navigation-side_active');
  });
  
  sideClose.on('click', function () {
    side.removeClass('navigation-side_active');
  });

  var modalForm = $('#modal-form');
  
  modalForm.on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(){
        $('#success').addClass('modal_active');
        $('input').val('');
      }
    });
  });

  $('.phone').mask('+7 (999) 999-99-99');
});



