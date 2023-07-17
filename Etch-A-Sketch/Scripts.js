const body=document.querySelector("p");
for(let k=0;k<16;k++){
    const container = document.createElement('div');
    container.className = '.container';
    body.appendChild(container);
}



const myCollection = document.querySelectorAll("div");

for(let i=0;i<16;i++){
    
    for(let j=0;j<16;j++){
        const grid = document.createElement('div1');
        myCollection[i].appendChild(grid);
    }
    
}
function changeColor(e){
    e.style.backgroundColor = "white";
}
const my = document.querySelectorAll("div1");
for(let i=0;i<my.length;i++){
    my[i].addEventListener("click",(e)=>{
        my[i].style.backgroundColor = "white";});
}