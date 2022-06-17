//each on of the lines below remove 5 seconds from the timer and creates another timer that counts up to 50 simeltaniousley//
function blastoffTimerV1(){
    console.log("blastoffTimerV1() started");
    var countdownTimer = 50;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function(){
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 5000)
    setTimeout(function(){
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 10000)
    setTimeout(function(){
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 15000)
    setTimeout(function(){
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 20000)  
    setTimeout(function(){
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 25000)
    setTimeout(function(){
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 30000)
    setTimeout(function(){
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 35000)
    setTimeout(function(){
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 40000) 
    setTimeout(function(){
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 45000)
    setTimeout(function(){
        // this section displays the blastoff text//
    countdownTimer = countdownTimer - 5;
    document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 50000)
}
// this section defines our tally sheet outside of the play craps function//
    var wins = 0;
    var losses = 0;
    var ties = 0;

function playCraps(){
    console.log("playCraps() started");//notify me when play craps has started//
    var die1;// these variables define die1 and die2//
    var die2;
    
    die1 = Math.ceil(Math.random() * 6);// random number generator for both the 6 sided die//
    die2 = Math.ceil(Math.random() * 6);
    console.log("Die1 = " + die1);//retrieves the value of die1//
    document.getElementById("die1Res").innerHTML = die1;//inserts the value of die1//
    console.log("Die2 = " + die2);//retrieves the value of die2//
    document.getElementById("die2Res").innerHTML = die2;//inserts the value of die2//
    //create sum from die 1 and die 2
    var sum = die1 + die2
    //see if sum is = 7 or 11
    if(sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "Craps, you lose!!";//if the sum is 7 or 11 the player sees the you lose text//
        losses++;//losses tally//
        document.getElementById("loseRes").innerHTML = losses;//inserts the value of losses//
        console.log("Craps, you lose!!");//notifies the console//
    } else if (die1 == die2 && die1 % 2 == 0) {//recognises doubles for a player win//
        document.getElementById("crapsRes").innerHTML = "Congrats, you win!!";//if the player gets doubles they get the you win text//
        wins++;//wins tally//
        document.getElementById("winRes").innerHTML = wins;//inserts the value of wins//
        console.log("Congrats, you win!!");//notifies the console//
    } else {
        document.getElementById("crapsRes").innerHTML = "You did not lose or win, please try again.";//if the player ties they see the you did not lose or win text//
        ties++;//ties tally//
        document.getElementById("tieRes").innerHTML = ties;//inserts the value of ties//
    }



    
}

function blastoffTimerV2(){
    var countdownTimer = 50;
    var halfCDT = countdownTimer / 2;
    for(var i = 0; i <= 10; i++){
        setTimeout(function(){
            console.log(countdownTimer);
            if(countdownTimer == 0){
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
            } else if(countdownTimer < halfCDT){
                document.getElementById("countdownDisplay").innerHTML = "Warning Less than ½ way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }
            
            countdownTimer = countdownTimer - 5;
        }, 5000 * i)
        
    }
    
}