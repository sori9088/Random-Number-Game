let random = Math.floor(Math.random()*100+1);
let count = 9;
let history = [];
let lastgame = [];
console.log(random);

function guess() {
    let guessNum = document.getElementById("guessNum").value;

    if (history.includes(guessNum)) {
        alert("You already say that number ! ");
        document.getElementById("guessNum").value='';
        return;
    } 

    if (guessNum == ""){
        alert("Input any number ! ");
        document.getElementById("guessNum").value='';
        return;
    }

    history.push(guessNum);



    if (random > guessNum) {
        document.getElementById("alert").setAttribute('class','alert alert-danger');
        document.getElementById("alert").innerHTML= "&#10071; Too Small &#10071;";
    } else if (random < guessNum) {
        document.getElementById("alert").setAttribute('class','alert alert-danger');
        document.getElementById("alert").innerHTML = "&#10071; Too Big &#10071;";
    } else if (random == guessNum){
        document.getElementById("alert").setAttribute('class','alert alert-success') ;
        document.getElementById("alert").innerHTML = "&#11088; Collect &#11088;";
        stopTimer();
        document.getElementById("guessbtn").disabled=true;
        
        }

    document.getElementById("guesses").innerHTML = `Remaining Guesses : ${(count--)}`;
    
   

    let finalMessage = "";

    for(let i=0;i<history.length;i++){

        finalMessage += `${history[i]} `
        document.getElementById("history").innerHTML = finalMessage;

    }

    if (count<0) {
        document.getElementById("guessbtn").disabled=true;
        document.getElementById("string").style.color="#F25F29";
        document.getElementById("string").innerHTML=`The answer is ${random}`;
        stopTimer();
        document.getElementById("alert").setAttribute('class','alert alert-danger') ;
        document.getElementById("alert").innerHTML = "&#128520; You Lose &#128520;";

        // console.log("here",histor,"here");
        // let str ="here"+history+"here"
        // innerHTML= `here ${history} here`
    }
    document.getElementById("guessNum").value='';
}


let time = 31;
let myTime;

function setTime() {
    time -= 1;
    document.getElementById("timer").innerHTML = `🕒Timer : ${time}🕒`;

    if(time==0){
        stopTimer();
        document.getElementById("guessbtn").disabled=true;
        document.getElementById("string").style.color="red";
        document.getElementById("alert").setAttribute('class','alert alert-danger');
        document.getElementById("alert").innerHTML = "&#10071; Time over &#129322; &#10071;";
    }
}

function timeCounting() {
    myTime = setInterval(setTime, 1000);
}

function stopTimer(){
    clearInterval(myTime);
}

timeCounting();