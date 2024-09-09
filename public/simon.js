let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","purple"];

let start=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(start==false)
    { 
     start=true;
     levelup();
    }
});

function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");
},100);
}

function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
{
    btn.classList.remove("userflash");
},100);
}

function levelup()
{
    userseq=[];
    level++;
    h2.innerText=`LEVEL ${level}`;
    let randomindx=Math.floor(Math.random()*3);
    let randomColor=btns[randomindx];
    let randombtn=document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(gameseq);
    btnflash(randombtn);
}

function checkcolor(index)
{
    if(userseq[index]==gameseq[index])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML= `Game Over!<br>Your Score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function ()
    {
        document.querySelector("body").style.backgroundColor="white";
    },150);
        reset();
    }
}

function btnpress()
{
    
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkcolor(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}

function reset()
{
    start=false;
    gameseq=[];
    userseq=[];
    level=0;

}
