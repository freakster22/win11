var win = document.getElementsById("taskmenu");

win.addEventListener('click', e =>
{
    console.log("clicked")
    document.getElementsById("startItems").hidden = false;
})
