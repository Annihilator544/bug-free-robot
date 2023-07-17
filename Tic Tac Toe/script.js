let array=[0,1,2,3,4,5,6,7,8]
let aiMark="X";
let humanMark="O";
let o='<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>';
let x='<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
function cellClick(e){
    event.target.innerHTML=o;
    array[event.target.id-1]=humanMark;
    if(checkIfWinnerFound(array,aiMark)){
        document.getElementsByClassName("p")[0].innerHTML="You lost";
        cells=document.getElementsByClassName("cell");
        for(let i=0;i<cells.length;i++){
            cells[i].onclick=null;
        }
    }
    else if(checkIfWinnerFound(array,humanMark)){
        document.getElementsByClassName("p")[0].innerHTML="Stop messing with my algo u cant possibly win this game lmao";
        cells=document.getElementsByClassName("cell");
        for(let i=0;i<cells.length;i++){
            cells[i].onclick=null;
        }
    }
    
    else if(getAllEmptyCellsIndexes(array).length==0){
        document.getElementsByClassName("p")[0].innerHTML="Draw";
        cells=document.getElementsByClassName("cell");
        for(let i=0;i<cells.length;i++){
            cells[i].onclick=null;
        }
    }
    const bestPlayInfo = minimax(array, aiMark);
    document.getElementById(bestPlayInfo.index+1).innerHTML=x;
    array[bestPlayInfo.index]=aiMark;
    document.getElementById(bestPlayInfo.index+1).onclick=null;
    if(checkIfWinnerFound(array,aiMark)){
        document.getElementsByClassName("p")[0].innerHTML="You lost";
        cells=document.getElementsByClassName("cell");
        for(let i=0;i<cells.length;i++){
            cells[i].onclick=null;
        }
    }
    else if(checkIfWinnerFound(array,humanMark)){
        document.getElementsByClassName("p")[0].innerHTML="Stop messing with my algo u cant possibly win this game lmao seriously";
        cells=document.getElementsByClassName("cell");
        for(let i=0;i<cells.length;i++){
            cells[i].onclick=null;
        }
    }
    
    else if(getAllEmptyCellsIndexes(array).length==0){
        document.getElementsByClassName("p")[0].innerHTML="Draw";
        cells=document.getElementsByClassName("cell");
        for(let i=0;i<cells.length;i++){
            cells[i].onclick=null;
        }
    }
   event.target.onclick=null;
   
}
function getAllEmptyCellsIndexes(array){
    return array.filter((cell)=>cell!=aiMark&&cell!=humanMark);
}
function checkIfWinnerFound(array,mark){
    if(array[0]==mark&&array[1]==mark&&array[2]==mark){
        return true;
    }
    else if(array[3]==mark&&array[4]==mark&&array[5]==mark){
        return true;
    }
    else if(array[6]==mark&&array[7]==mark&&array[8]==mark){
        return true;
    }
    else if(array[0]==mark&&array[3]==mark&&array[6]==mark){
        return true;
    }
    else if(array[1]==mark&&array[4]==mark&&array[7]==mark){
        return true;
    }
    else if(array[2]==mark&&array[5]==mark&&array[8]==mark){
        return true;
    }
    else if(array[0]==mark&&array[4]==mark&&array[8]==mark){
        return true;
    }
    else if(array[2]==mark&&array[4]==mark&&array[6]==mark){
        return true;
    }
    else{
        return false;
    }
}

function minimax(currBdSt, currMark) {
    const availCellsIndexes = getAllEmptyCellsIndexes(currBdSt);
    if (checkIfWinnerFound(currBdSt, humanMark)) {
        return {score: -1};
    } else if (checkIfWinnerFound(currBdSt, aiMark)) {
        return {score: 1};
    } else if (availCellsIndexes.length === 0) {
        return {score: 0};
    }
    const allTestPlayInfos = [];
    for (let i = 0; i < availCellsIndexes.length; i++) {
        const currentTestPlayInfo = {};
        currentTestPlayInfo.index = currBdSt[availCellsIndexes[i]];
        currBdSt[availCellsIndexes[i]] = currMark;
        
        if (currMark === aiMark) {
            const result = minimax(currBdSt, humanMark);
            currentTestPlayInfo.score = result.score;
        } else {
            const result = minimax(currBdSt, aiMark);
            currentTestPlayInfo.score = result.score;
        }
        currBdSt[availCellsIndexes[i]] = currentTestPlayInfo.index;
        allTestPlayInfos.push(currentTestPlayInfo);
    }
    let bestTestPlay = null;
    if (currMark === aiMark) {
        let bestScore = -Infinity;
        for (let i = 0; i < allTestPlayInfos.length; i++) {
            if (allTestPlayInfos[i].score > bestScore) {
                bestScore = allTestPlayInfos[i].score;
                bestTestPlay = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < allTestPlayInfos.length; i++) {
            if (allTestPlayInfos[i].score < bestScore) {
                bestScore = allTestPlayInfos[i].score;
                bestTestPlay = i;
            }
        }
    }
    return allTestPlayInfos[bestTestPlay];
} 

    var i = 0;
    var txt = 'Created By Aditya Sharma | Logo Design By Ritik Balwant';
    var j=txt.length-1;
    var speed = 250;
function typeWriter() {
    document.getElementById("footer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}