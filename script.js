//global variables

//materialize stuff
 M.AutoInit();


// dropdown
 document.addEventListener('DOMContentLoaded', function() {
    var drop =document.querySelectorAll('.dropdown-trigger');
    //M.Dropdown.init(drop),{}
    //coverTrigger:false
    //closeOnClick:true
    var dropdownOptions = {
        'closeOnClick': true,
        'coverTrigger':false,
        'alignment': 'left'
    }
    var instanceDropdown1 = M.Dropdown.init(drop, dropdownOptions);
  });

//$(".dropdown-trigger").dropdown(hover: false);

//floating action button

//document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.fixed-action-btn');
//   var instances = M.FloatingActionButton.init(elems, options);
//  });


//tests
console.log("This is a test")

