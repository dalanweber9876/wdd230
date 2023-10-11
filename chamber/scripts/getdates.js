let oLastModif=document.lastModified;
const d=new Date();
let currentYear=d.getFullYear();
document.querySelector('#last-modified').innerHTML=`Last Modification: ${oLastModif}`;
document.querySelector('.currentYear').innerHTML="&#169 " + currentYear + " Rexburg Chamber";