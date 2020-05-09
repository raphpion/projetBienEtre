$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); /* activation des tooltips */
    document.getElementById('youngRed').style.width = '16%'; /* grossissement de stat1 */
    let x = document.getElementsByClassName('studentRed'); 
    let i;
    for (i = 0; i < x.length; i++) {
      x[i].style.width = "24%";
    }/* grossissement de stat 3 */
  });
