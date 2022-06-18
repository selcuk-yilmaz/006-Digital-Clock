const hour=document.querySelector(".hour.box");
const minute=document.querySelector(".minute.box");
const second=document.querySelector(".second.box");
const ampm=document.querySelector(".ampm.box");
const date=document.querySelector(".date.box");
 
const gettime=()=>{
    hour.innerHTML=new Date().getHours() %12;
    minute.innerHTML=new Date().getMinutes();
    second.innerHTML=new Date().getSeconds();
    date.innerHTML = new Date().toDateString()
    // `${new Date().getFullYear()} : ${new Date().getMonth()} : ${new Date().getDay()} `; 

new Date().getHours() > 12 ? (ampm.textContent = "PM") : ampm.textContent="AM"
hour.innerHTML.length < 2 && (hour.innerHTML= "0"+new Date().getHours()%12);
minute.innerHTML.length < 2 && (minute.innerHTML= "0"+new Date().getMinutes());
second.innerHTML.length < 2 && (second.innerHTML= "0"+new Date().getSeconds());
}
setInterval(gettime,999)

