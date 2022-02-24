let yyyy =new Date();
let year=yyyy.getFullYear()
document.getElementById("span").innerHTML=year;
let turn="X";
let gameover=false;
const closegen=()=>{
    let alpha=document.querySelector(".info1").innerText;
    if((alpha === "X Won") || (alpha === "O Won") || (alpha === "Game over!")){
        document.getElementById("blocking").classList.remove('gameContainer')
        document.getElementById("blocking").classList.add('blocking')
        document.getElementById("playagain").classList.remove('blocking')
    }
}
const checkover=()=>{
    let box = document.getElementsByClassName('boxtext');
    if((box[0].innerText !== "")
    && (box[1].innerText !== "")
    && (box[2].innerText !== "")
    && (box[3].innerText !== "")
    && (box[4].innerText !== "")
    && (box[5].innerText !== "")
    && (box[6].innerText !== "")
    && (box[7].innerText !== "")
    && (box[8].innerText !== "")
    ){
        document.querySelector('.info1').innerText = "Game over!";
        gameover = true ;
    }
}

const change=()=>{
   return turn==="X"?"O":"X"
};

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info1').innerText = boxtext[e[0]].innerText + " Won" ;
            gameover = true ;
        };
    })
}
let boxes = document.getElementsByClassName("border");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = change();
            checkover();
            checkWin();
            closegen();
        if(!gameover){
                document.getElementsByClassName("info1")[0].innerText= "Turn for " + turn;
        }
            
    }})
        
})


    
const reset=()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn="X";
    document.getElementById("playagain").classList.add('blocking')
    document.getElementById("blocking").classList.add('gameContainer')
    document.getElementsByClassName("info1")[0].innerText= "Turn for X ";
    gameover = false;
}
