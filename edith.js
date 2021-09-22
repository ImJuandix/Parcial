function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var gustos=document.getElementById("gustos_row"+no);
 var porcentaje=document.getElementById("porcentaje_row"+no);
	
 var gustos_data=gustos.innerHTML;
 var porcentaje_data=porcentaje.innerHTML;
	
 gustos.innerHTML="<input type='text' name = 'gusto' id='gustos_text"+no+"' value='"+gustos_data+"'>";
 porcentaje.innerHTML="<input type='text' name = 'porcentaje' id='porcentaje_text"+no+"' value='"+porcentaje_data+"'>";
}

function save_row(no)
{
 var gustos_val=document.getElementById("gustos_text"+no).value;
 var porcentaje_val=document.getElementById("porcentaje_text"+no).value;

 document.getElementById("gustos_row"+no).innerHTML=gustos_val;
 document.getElementById("porcentaje_row"+no).innerHTML=porcentaje_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function add_row()
{
 var new_gustos=document.getElementById("gustos").value;
 var new_porcentaje=0;
 var table=document.getElementById("tabla");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='gustos_row"+table_len+"'>"+new_gustos+"</td><td id='porcentaje_row"+table_len+"'>"+new_porcentaje+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' style='display:none' id='save_button"+table_len+"' 'value='En edicion' class='save' onclick='save_row("+table_len+")'> </td></tr>";
 document.getElementById("gustos").value="";
 document.getElementById("new_porcentaje").value="";
}