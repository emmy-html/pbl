// fades in content on load
$(document).ready(function () {
    $('.fade').fadeIn(1500).removeClass('fade');
});
// NEW color theme switch
document.getElementById('themeSwitch').addEventListener('change', function(event){
    if (event.target.checked) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
       document.body.removeAttribute('data-theme');
      }
  });
var themeSwitch = document.getElementById('themeSwitch');
if(themeSwitch) {
  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  };
}
var themeSwitch = document.getElementById('themeSwitch');
if(themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });

  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light');
  };

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  };
}
// toggle the about section
$(".about").click(function() {
    $("#about").fadeToggle('linear');
})
// show a category tab by default
document.getElementById("default").click();
// date updated function
var dateDisplay = document.getElementById("date");
dateDisplay.innerHTML = "June 22nd, 2020";