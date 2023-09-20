let count=1;
document.getElementById("radio_1").checked=true;

setInterval(function(){
    nextImage();
},5000)

function nextImage(){
    count++;
    if(count>10){
        count=1;
    }

    document.getElementById("radio_"+count).checked=true;
}