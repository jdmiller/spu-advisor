$(document).ready(function(){
      var i=1;
     $("#add_row").click(function(){
      $('#addr'+i).html("<td><input name='name"+i+"' type='text' placeholder='Course' class='form-control input-md'  /> </td><td><input  name='dependtype"+i+"' type='text' placeholder='Dependency Type'  class='form-control input-md'></td><td><input  name='target"+i+"' type='text' placeholder='Target'  class='form-control input-md'></td>");

      $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      i++; 
  });
     $("#delete_row").click(function(){
    	 if(i>1){
		 $("#addr"+(i-1)).html('');
		 i--;
		 }
	 });
});