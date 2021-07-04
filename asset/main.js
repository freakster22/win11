var win = document.getElementById("win");
var menu = document.getElementById("startmenu");
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



// clickable file manager
file = document.getElementById("fileExplore");
file.addEventListener("click", ()=>{
	window.open('file:///C:');
})
files = document.getElementById("files");
files.addEventListener("click", ()=>{
	window.open('file:///C:');
})

// clickable search
search = document.getElementsByClassName("search")[0];
searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click", ()=>{
	if(search.style.bottom=='-200px'){
		search.style.bottom='60px'
		startmenu.style.bottom = '-650px'
		notepadinput.style.bottom = '-700px'
	}else{
		search.style.bottom='-200px'
	}
})


// clickable calander
calender = document.getElementById("calender");
calenderinput = document.getElementById("calenderinput")
calender.addEventListener("click", ()=>{
	if(calenderinput.hidden == 'true'){
		calenderinput.hidden= "false";
	}else{
		calenderinput.hidden= "true";
	}
})

// clickable notepad
notepad = document.getElementById("notepad")
notepadinput = document.getElementById("notepadinput")
notepadtaskbar = document.getElementById("notepadtaskbar");
notepad.addEventListener("click", ()=>{
	if(notepadinput.style.bottom=='-700px'){
		notepadinput.style.bottom = "70px"
		startmenu.style.bottom = '-650px'
		search.style.bottom='-200px'
		notepadtaskbar.style.display = 'inline'
	}else{
		notepadinput.style.bottom = '-700px'
	}
})
notepadtaskbar.addEventListener("click", ()=>{
	if(notepadinput.style.bottom=='-700px'){
		notepadinput.style.bottom = "70px"
		startmenu.style.bottom = '-650px'
		search.style.bottom='-200px'
		notepadtaskbar.style.display = 'inline'
	}else{
		notepadinput.style.bottom = '-700px'
	}
})


function savingnotepad(){
    var text = document.getElementById("savenote").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "my-note.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }