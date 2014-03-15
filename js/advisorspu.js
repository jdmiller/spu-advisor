$(document).ready(function() {
  $(document.body).on( 'click', '.dropdown-menu li', function( event ) {
    var $target = $( event.currentTarget );
    $target.closest( '.btn-group' ).find( '[data-bind="label"]' ).text( $target.text() ).end().children( '.dropdown-toggle' ).dropdown( 'toggle' );
    return false;
    });

  $('#btnAdd').click(function(){
    var course = $('#course').val();
    var type = $('#depType').text();
    var target = $('#depTarget').val();

    $('#course').val("");
    $('#depTarget').val("");
    $('#crn').val("");
    $('#tbDepends').append('<tr><td>'+course+'</td><td>'+type+'</td><td>'+target+'</td><td>'+'</tr>');
  });
});
