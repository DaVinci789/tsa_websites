$(document).ready(function() {
  $('#list-group').hover(
      function(){$(this).addClass('active');},
      function(){$(this).removeClass('active');}
  );
});
