function datetime(){
    let a = new Date();
let d = a.getDate();
let dd = a.getDay();
let m = a.getMonth();
let y = a.getUTCFullYear();
let h = a.getHours();
let mm = a.getMinutes(); 
let x = "AM";
if(d < 10){
    d = "0" + d;
} 
if(h < 10){
    h = "0" + h;
} 
if(mm < 10){
    mm = "0" + mm;
} 
if(h>12){
    h = h - 12;
    x = "PM";
} 
if(h == 0){
    h = 12;
}
day = ["Sunday", "Monday", "Tuesday", "Thursday", "Wednesday", "Friday", "Saturday"];
month  = ["Jan","Fab","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

let date = d + month[m] + "," + y +" AT " + day[dd] + " " + h + ":" + mm + x;
document.getElementById("time").innerText = date;   
} 
setInterval(datetime,500);