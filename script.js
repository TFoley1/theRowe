//global variables

//materialize stuff
 M.AutoInit();


// dropdown
document.addEventListener('DOMContentLoaded', function() {
    var drop =document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(drop),{coverTrigger:true, closeOnClick:true}
  });

//floating action button

//document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.fixed-action-btn');
//   var instances = M.FloatingActionButton.init(elems, options);
//  });


//tests
console.log("This is a test")

