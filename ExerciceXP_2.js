/**
 Copy the code above, to a structured HTML file.
In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
 */

 



function myMove(){
    let animate=document.getElementById("animate");
    let container_width=400;
    let animation_width=50;
    let pos=0;
    let move=setInterval(function(){
        if (pos < (container_width-animation_width)){
            pos++;
            animate.style.left=pos+"px";
        }else{
            clearInterval(move);
            return;
        }
    },1)
}
