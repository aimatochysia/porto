//globals
let sizeIncrement = 20;
const clickableArea = document.querySelectorAll('.clickable');
let pointer;
// Wait for DOM to load and assign pointer
document.addEventListener('DOMContentLoaded', function() {
    pointer = document.getElementById('doc-pointer');
});

//function only at event
//move pointer
document.addEventListener('mousemove', function(e) {
    let pointerX = e.pageX;
    let pointerY = e.pageY;
    pointer.style.left = pointerX + 'px';
    pointer.style.top = pointerY + 'px';
});

//increase size when click
document.addEventListener('click',function(e){
    let pointerX = 0;
    let pointerY = 0;
    pointerX = pointer.clientWidth + sizeIncrement;
    pointerY = pointer.clientHeight + sizeIncrement;
    pointer.style.width = pointerX + 'px';
    pointer.style.height = pointerY + 'px';
    setTimeout(() => { 
        pointerX = pointer.clientWidth  - sizeIncrement;
        pointerY = pointer.clientHeight - sizeIncrement;
        pointer.style.width = pointerX + 'px';
        pointer.style.height = pointerY + 'px';
    }, 100);
});

function mouseEnter() {
    pointer.style.border = '2px solid blue';
    pointer.style.transform = 'scale(1.2)';
};

function mouseLeave() {
    pointer.style.border = '2px solid aliceblue';
    pointer.style.transform = 'scale(1)';
};

clickableArea.forEach(function(clickable) {
    clickable.addEventListener('mouseenter',function() {
        pointer.style.borderColor = 'blue';
    });
    clickable.addEventListener('mouseleave',function() {
        pointer.style.borderColor = 'aliceblue';
    });
});