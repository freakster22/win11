var win = document.getElementById("taskmenu");
var menu = document.getElementById("startItems");

win.addEventListener('click', e =>
{
    console.log("clicked")
    if (menu.hidden == true)
        menu.hidden = false;
    else
        menu.hidden = true;
    
})
