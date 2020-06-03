$(document).ready(function() {
  
  $("#formOne").submit(function(event) {
    let personInput = $("input#person").val();
    
    $(".person").text(personInput);
    
    $("#letter").show();
    
    event.preventDefault();
    
  });
});
