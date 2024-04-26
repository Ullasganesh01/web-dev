let btnList = document.querySelectorAll(".drum");
let btnListLen = btnList.length;
//console.log(btnList[0]);

for (let i=0;i<btnListLen;i++){
    // document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //     this.style.color = "white";
    //     var audio = new Audio("./sounds/tom-"+[i+1]+".mp3");
    //     audio.play();
    //     console.log(btnList[i].innerHTML);
    // });

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnInnerHtml = this.innerHTML;
        makeSound(btnInnerHtml);
        buttonAnimation(btnInnerHtml);
    });

    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });
}

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break; 
                
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break; 
                
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var tom5 = new Audio("./sounds/tom-5.mp3");
            tom5.play();
            break;
                
        case "k":
            var tom6 = new Audio("./sounds/tom-6.mp3");
            tom6.play();
            break;

        case "l":
            var tom7 = new Audio("./sounds/tom-7.mp3");
            tom7.play();
            break;
                
    }
}

function buttonAnimation(key){
    let activeBtn = document.querySelector("."+key);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },200);
}
