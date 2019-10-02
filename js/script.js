let random = Math.floor(Math.random()*100+1);
let count = 1;
let history = [];
console.log(random);

function guess() {
    let guessNum = document.getElementById("guessNum").value;

    if (history.includes(guessNum)) {
        alert("You already say that number ! ");
        return;
    }

    history.push(guessNum);



    if (random > guessNum) {
        document.getElementById("result").innerHTML = "&#10071; Too Small &#10071;";
    } else if (random < guessNum) {
        document.getElementById("result").innerHTML = "&#10071; Too Big &#10071;";
    } else {
        document.getElementById("result").innerHTML = "&#11088; Collect &#11088;";
    }

    document.getElementById("guesses").innerHTML = "Number of attempts : "+(count++);
    
   

    let finalMessage = "";

    for(let i=0;i<history.length;i++){

        finalMessage += `${history[i]} `
        document.getElementById("history").innerHTML = finalMessage;

    }

    if (history.length>=5) {
        document.getElementById("guessbtn").disabled=true;
        document.getElementById("string").style.color="red";
        document.getElementById("string").innerHTML=`The answer is ${random}`;
        // console.log("here",histor,"here");
        // let str ="here"+history+"here"
        // innerHTML= `here ${history} here`
    }
    document.getElementById("guessNum").value='';
}
