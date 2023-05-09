const menu=document.getElementById("menu");
const game=document.getElementById("game");
const start=document.getElementById("start");
const table= document.querySelector("table");
const restart= document.getElementById("restart");
const td_list=document.querySelectorAll("td");
const result=document.getElementById("result");
const tour=document.getElementById("turn");
const combi = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Lignes verticales
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];



var joueur="X";
var x_index =[];
var o_index=[];
let isActive=true;

// gestion du bouton restart
function restartF(){

    td_list.forEach(element=>{
        element.textContent='';
        x_index=[];
        o_index=[];
        joueur='X';
        tour.textContent="C'est au tour de X";
        isActive=true;
    });
}

function checkWin(){

    for(let i =0;i<8;i++){

        if (combi[i].every(el=>x_index.includes(el))){
            console.log("x a gagné ");
            tour.textContent="X remporte la victoire";
            isActive=false;

        }
    
        else if (combi[i].every(el=>o_index.includes(el))){
            console.log("o a gagné");
            tour.textContent="O remporte la victoire";
            isActive=false;
            

        }
        
        else if(x_index.length+o_index.length===9){
            console.log("égalité");
            tour.textContent="Egalite";
            isActive=false;

        }
    }


}

start.addEventListener("click",function(){

    menu.style.display="none";
    game.style.display="inline";



})


table.addEventListener("click",function(event){
    if(isActive){
    // condition pour negliger les click sur la bordure 

    if(event.target.nodeName != "TD"){return;}
    
    // condition pour afficher x ou o dans la case si elle est vide 

    if(event.target.textContent!=''){return;}
    event.target.textContent=joueur
    
    // condition pour jongler entre x et o

    if(joueur==="X"){
        joueur="O";x_index.push(parseInt(event.target.id));
        tour.textContent="C'est au tour de O";}
    else{
        joueur="X";o_index.push(parseInt(event.target.id));
        tour.textContent="C'est au tour de X";}
    
    // boucle pour vérifier si il y a eu une combinaison gagnante 
    
    checkWin();
    }
});

restart.addEventListener("click",restartF);




