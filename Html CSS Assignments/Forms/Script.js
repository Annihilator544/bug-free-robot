function over(){
    const imgwidth= document.querySelector('img');
    const overlay= document.querySelector('h1');
    overlay.style.width= imgwidth.width + 'px';
}
const interval = setInterval(function() {
    // method to be executed;
    over();
  }, 1000);
