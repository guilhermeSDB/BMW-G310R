let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let bike = document.getElementById("bike");
let arrowBtn = document.getElementById("arrow")
let content = document.getElementById("main-content")

redBtn.onclick = function(){
    bike.style.backgroundImage = "url(../src/BMW1.png)"
}

blueBtn.onclick = function(){
    bike.style.backgroundImage = "url(../src/BMW2.png)"
}

blackBtn.onclick = function(){
    bike.style.backgroundImage = "url(../src/BMW3.png)"
}

arrowBtn.onclick = function(){
    if(arrowBtn.classList.contains("ativo")){
        arrowBtn.classList.remove("ativo");
        content.style.filter = "blur(0px)";
        bike.style.backgroundPosition = "left";
    }else{
        arrowBtn.classList.add("ativo");
        content.style.filter = "blur(5px)";
        bike.style.backgroundPosition = "center";
    }
}