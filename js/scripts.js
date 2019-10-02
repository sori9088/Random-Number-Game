

let random = Math.floor((Math.random()*100)+1)
console.log(random);
count = 1;

let history = [];

function guess(){
    let guessNum = document.getElementById("guessNum").value;
    if(history.includes(guessNum)){
        console.log("you already say that number");
        return ;

    }
    history.push(guessNum)    
    
    if(guessNum > random) {
        document.getElementById("result").innerHTML ="Too big!";
    }
    else if (guessNum < random){
        document.getElementById("result").innerHTML ="Too small!";    
    } else {
        document.getElementById("result").innerHTML ="Correct!";
    }

    document.getElementById("guesses").innerHTML="시도한 횟수는"+(count++)+"번 입니다.";
    
    let finalMessage = "";

    for (let i=0; i<history.length; i++){
        
        finalMessage += `${history[i]} `
        document.getElementById("history").innerHTML = finalMessage;
    }
    


    console.log(history);
    if(count>5){                    /*입력을 5회 초과로 시도하면*/

        document.getElementById("guessbtn").disabled=true;

        document.getElementById("result").style.color="red";

        document.getElementById("result").innerHTML="정답은 "+random+"입니다.";

    }

    


    
}