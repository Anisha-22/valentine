const text=document.getElementById("msg")
const el=document.getElementById("element")
const music = document.getElementById("music");

document.body.onclick=function(){

    if(document.body.classList.contains("bg1")){
    document.body.classList.replace("bg1","bg2")
    text.classList.replace("heading1","heading2")
    el.classList.replace("hide","show")
text.textContent="YOU 🫵🏻"
music.play();  }

    else {document.body.classList.replace("bg2","bg1")
        text.classList.replace("heading2","heading1")
        el.classList.replace("show","hide")
        text.textContent="CLICK HERE TO SEE MY VALENTINE!!"
        music.pause();
    }
};