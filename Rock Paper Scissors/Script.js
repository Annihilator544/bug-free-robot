console.log("Hello World");
alert("Hello World");
for(let i=0;i<10;i++){
let Choice = (prompt("Please enter Your Choice: "));
let computerChoice = Math.random()*3;
if(computerChoice ==0){
    computerChoice = "rock";
}
else if(computerChoice ==1){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
Choice = Choice.toLowerCase();
if(Choice == "rock" ){
    switch(computerChoice){
        case "rock":
            alert("The result is a tie!");
            break;
        case "paper":
            alert("Computer Wins!");
            break;
        case "scissors":
            alert("You Win!");
    }
}
else if(Choice == "paper" ){
    switch(computerChoice){
        case "rock":
            alert("You Win!");
            break;
        case "paper":
            alert("The result is a tie!");
            break;
        case "scissors":
            alert("Computer Wins!");
    }
}
else if(Choice == "scissors" ){
    switch(computerChoice){
        case "rock":
            alert("Computer Wins!");
            break;
        case "paper":
            alert("You Win!");
            break;
        case "scissors":
            alert("The result is a tie!");
    }
}
}