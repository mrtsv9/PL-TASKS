var adaptNavPopup = document.querySelector(".adapt-nav-popup");
var adaptPopupOpen = document.getElementById("adapt-popup-open");
var adaptPopupClose = document.getElementById("adapt-popup-close");
    
adaptPopupOpen.onclick = function ()
{  
    adaptNavPopup.classList.add('active');
}
adaptPopupClose.onclick = function ()
{  
    adaptNavPopup.classList.remove('active');
}