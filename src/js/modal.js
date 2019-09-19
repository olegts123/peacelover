$(document).ready(function() {
  var button = $('.btn-active');
  var modal = $('#modal');
  var modalSuccess = $('#success');
  var close = $('#close');
  var closeSucc = $('#close-success');

  button.on('click', function(){
    modal.addClass('modal_active');
  });

  close.on('click', function(){
    modal.removeClass('modal_active');
  });

  closeSucc.on('click', function(){
    modalSuccess.removeClass('modal_active');
  });
  
});