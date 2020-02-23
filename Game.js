var userScore = 0;
var compScore = 0;
var computersTurn = 'a';
var usersTurn = 'b';

// Win is 1 and Lose is 0
var winOrLose = 2;

// Helpful Variables
var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissors = document.getElementById("s");

var compScore_act = document.getElementById("compScore");
var userScore_act = document.getElementById("userScore");
var scoreBoard = document.querySelector(".scoreBoard");
var winOrLose_act = document.querySelector(".result");




function game(usersTurn)
{
    var computersTurn = compsChoice();

    switch(computersTurn+usersTurn)
    {
        case "rr":
            case "pp":
                case "ss":
                        tie();
                    console.log("It's a tie");
                    break;


        case "rp":
            case "ps":
                case "sr":
               
                        
                    win();
                    break;
        default:

                lose();
            break;

            
    }
    
}

function compsChoice()
{
    var choices = ['r','p','s'];
    var pos = Math.floor(Math.random()*3);
    computersTurn = choices[pos];


    return computersTurn;
}



function main() {
    rock.addEventListener('click', function () {
        // console.log("You have selected rock");
        usersTurn = 'r';
        game(usersTurn);
        
    })

    paper.addEventListener('click', function () {
        // console.log("You have selected paper");
        usersTurn = 'p';
        game(usersTurn);
    })

    scissors.addEventListener('click', function () {
        // console.log("You have selected scissors");
        usersTurn = 's';
        game(usersTurn);
    })
}

function win()
{
    userScore++;
    userScore_act.innerHTML = userScore;
    makeItLegible();
    console.log(usersTurn);
    console.log(computersTurn);
    winOrLose_act.innerHTML = "The computer chose "+computersTurn +". " +usersTurn + " beats " + computersTurn + ". So you WIN!!!"
}

function lose()
{
    compScore++;
    compScore_act.innerHTML = compScore;
    makeItLegible();
        console.log(usersTurn);
        console.log(computersTurn);
    winOrLose_act.innerHTML = "The computer chose "+computersTurn +". "+ computersTurn + " beats " + usersTurn + ". So you Lose :("
}

function tie()
{
    winOrLose_act.innerHTML = "It's a tie";
}

function makeItLegible()
{
    console.log(1);
   switch(usersTurn)
   {
       
    case 'r':
           usersTurn = "Rock";
           //console.log(usersTurn);
           break;
    case 'p':
           usersTurn = "Paper";
           //console.log(usersTurn);
           break;
    case 's':
           usersTurn = "Scissors";
           //console.log(usersTurn);
           break;

           default:
               break;
   }

   switch(computersTurn)
   {
       
    case 'r':
           computersTurn = "Rock";

           break;
    case 'p':
           computersTurn = "Paper";
           break;
    case 's':
           computersTurn = "Scissors";
           break;
         default:
                break;
    
   }
}



main();

