// Adding in the live chat feature when the user clicks on the messsages tab
$(document).ready(function(){
    $("#attendance").click(function(){
    $('#content').empty();
    $('#content').append(
        '<h1 class="text-center">Attendance</h1>'+
        '<table class="rwd-table table-hover">'+
        '<tr>'+
        '<th>ID</th>'+
        '<th>Student</th>'+
        '<th>Attended?</th>'+
        '</tr>'+
        '<tr>'+
        '<td data-th="id">1</td>'+
        '<td data-th="Student">Bob</td>'+
        '<td data-th="Attended">YES</td>'+
        '</tr>'+
        '<tr>'+
        '<td data-th="id">2</td>'+
        '<td data-th="Student">Sally</td>'+
        '<td data-th="Attended">NO</td>'+
        '</tr>'+
        '</table>'

            );
    });
  });