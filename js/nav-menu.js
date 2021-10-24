var adaptNavPopup = document.querySelector(".adapt_nav_popup");
var adaptPopupOpen = document.getElementById("adapt_popup_open");
var adaptPopupClose = document.getElementById("adapt_popup_close");
    
adaptPopupOpen.onclick = function ()
{  
    adaptNavPopup.classList.add('active');
}
adaptPopupClose.onclick = function ()
{  
    adaptNavPopup.classList.remove('active');
}
