var win = document.getElementById("win");
var menu = document.getElementById("startItems");
dateTime = document.getElementById("dateTime");

const date = new Date();
var datenum = date.getDate();
var month = date.getMonth() + 1;
var yr = date.getFullYear();
var day = date.toLocaleString('en-us', {  weekday: 'long' });
var hrs = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();


win.addEventListener('click', e =>
{
    console.log("clicked")
    if (menu.hidden == true)
        menu.hidden = false;
    else
        menu.hidden = true;
    
})

function dateDisplay(){
    dateTime.innerHTML = `<span>${hrs}:${min}</span>
    <span>${day}</span>
    <span>${datenum}-${month}-${yr}`
}

if(datenum<10){
    datenum = "0"+datenum%10;
}
if(month<10){
    month = "0"+month%10;
}
if(hrs<10){
    hrs = "0"+hrs%10;
}
if(min<10){
    min = "0"+min%10;
}
if(sec<10){
    sec = "0"+sec%10;
}

dateDisplay();

setInterval(()=>{
    dateDisplay();
},15000);
