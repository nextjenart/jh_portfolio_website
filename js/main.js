/* This is my main JS file */

console.log("Wait, you weren't supposed to see this! Shoo! SHOO!");


function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}