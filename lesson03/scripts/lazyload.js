let oLastModif=document.lastModified;
const d=new Date();
let currentYear=d.getFullYear();
document.querySelector('#lastModified').innerHTML=`Last Modification: ${oLastModif}`;
document.querySelector('.currentYear').innerHTML="&#169 " + currentYear + " Dalan Weber - Lazy Load - Lesson 07";