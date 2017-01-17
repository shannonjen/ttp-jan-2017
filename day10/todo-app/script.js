$(document).ready(function() {
  var $list
  var $addToDoForm
  $list = $('ul');
  $addToDoForm = $('#addToDoForm');

  $addToDoForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li>' + text + '</li>');
    $('input:text').val('');
  });

  $list.on('click','li', function() {
    var $this = $(this);
    console.log($this)
    $this[0].remove();
    // $this[0].style.textDecoration = "line-through";
  })
});
