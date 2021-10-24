var adaptNavPopup = document.querySelector(".adapt-nav-popup");
var adaptPopupOpen = document.getElementById("adapt-popup-open");
var adaptPopupClose = document.getElementById("adapt-popup-close");
    
adaptPopupOpen.onClick = function ()
{  
    adaptNavPopup.classList.add('active');
}
adaptPopupClose.onClick = function ()
{  
    adaptNavPopup.classList.remove('active');
}



// var navHeaderAdapt = document.querySelector(".navigation__adapt__popup");
// var openNavHeaderBtn = document.getElementById("navigationNavOpen");
// var closeNavHeaderBtn = document.getElementById("navigationNavClose");
    
// openNavHeaderBtn.onclick = function ()
// {  
//     navHeaderAdapt.classList.add('active');
// }
// closeNavHeaderBtn.onclick = function ()
// {  
//     navHeaderAdapt.classList.remove('active');
// }