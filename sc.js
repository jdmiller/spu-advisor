$(document).ready(function(){
      var i=1;
     $("#add_row").click(function(){
      alert("Add Course");
      $('#addr'+i).html("<td><input name='name"+i+"' type='text' placeholder='Course' class='form-control input-md'  /> </td><td><input  name='dependtype"+i+"' type='text' placeholder='Days'  class='form-control input-md'></td><td><input  name='target"+i+"' type='text' placeholder='Time'  class='form-control input-md'></td>");

      $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
      i++; 
  });
     $("#delete_row").click(function(){
      alert("Delete Last Class");
    	 if(i>1){
		 $("#addr"+(i-1)).html('');
		 i--;
		 }
	 });
});