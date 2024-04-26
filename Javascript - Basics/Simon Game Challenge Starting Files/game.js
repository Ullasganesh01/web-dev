//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
let buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).keypress(function(){ 
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    } 
});

$(".btn").on("click", function(){
    let userChosenColour =  $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1)
});

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    let randomNum =  Math.round(Math.random()*3);
    let randomChosenColor = buttonColors[randomNum]; 
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}



function playSound(name){
    let audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}



function checkAnswer(currentLevel){
        if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
           if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
           }
        }else{
            playSound("wrong");
       
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);

            startOver();
        }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}


