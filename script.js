$( document ).ready(
  function() {
    console.log( "Welcome!");
    
    $("#house").draggable();
    $("#garage").draggable();
    $("#driveway").draggable();
    $("#storage").draggable();
  }
);

$(document)
  .on(
    'click', 
      (event)=> 
      {
        alert(event.target.id); 
        let $clicked = $('#'+event.target.id );  
        alert($clicked.position().top);
        
        console.log(
          event.target.id, 
          $('#'+event.target.id)
          .position()
          .left);
})