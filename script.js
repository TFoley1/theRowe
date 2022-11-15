//global variables

let darkMode = false;
let navBar = document.getElementsByTagName("NAV")
let pageBackgroundColor = document.getElementsByTagName("BODY")
let styleSheet = document.getElementById("theme-link").href

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



//dark mode
function changeToDarkMode() {
  
  //change stylesheet
  styleSheet.href = "darkstyle.css"
  console.log(styleSheet.href)
  
  // change nav bar and background colors
  document.getElementById("navBar").classList.remove('indigo');
  document.getElementById("navBar").classList.remove('lighten-1');
  document.getElementById("navBar").classList.add('blue-grey darken-4');
  
  
  //original bad method
  // navBar[0].backgroundColor = "#263238" //materialize blue-grey darken-4
  // pageBackgroundColor[0] = "#455a64" //materialize blue-grey darken-2
  
  // change text color
  //document.body.style.color = "#eeeeee"
}




//tests
console.log("This is a test")
console.log(navBar[0])
console.log(pageBackgroundColor[0])

