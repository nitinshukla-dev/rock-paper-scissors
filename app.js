let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");


const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win ");
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";   
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";

    }
}
const drawgame=()=>{
    msg.innerText="Game was draw ! Play again.";
    msg.style.backgroundColor="blue";
}
const getcompchoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const playgame=(userchoice)=>{
  console.log("user choice=",userchoice);  
  const compchoice=getcompchoice();
  console.log("comp choice=",compchoice);
  if(userchoice===compchoice){
    drawgame();
  }
  else{
    let userWin=true;
    if(userchoice==="rock"){
        userWin=compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        userWin=compchoice==="scissors"?false:true;
    }
    else {
        userWin=compchoice==="rock"?false:true;
    }
    showWinner(userWin,userchoice,compchoice);
  }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})