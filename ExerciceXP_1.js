/* Part I
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will alert “Hello World”. */

// Creating the function
function Called(){
    alert("Hello World");
}

setTimeout(Called,2000);

/* Part II
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">. */
function CalledWithParagraph(){
    let p = document.createElement("p");
    p.innerHTML="Hello World"
    document.getElementById("container").append(p)
}

setTimeout(CalledWithParagraph,2000);

/*Part III

In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
The interval will be cleared (ie. clearInterval), when the user will click on the button.
Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
*/
function CalledByInterval(){
    let p = document.createElement("p");
    p.innerHTML="Hello World";
    p.style.backgroundColor="green";
    p.style.color="white";
    if (document.getElementById("container").children.length < 5){
        document.getElementById("container").append(p)
    }
}

let intervalle=setInterval(CalledByInterval,2000);

let bouton=document.getElementById("clear");

let div=document.getElementById("container");

bouton.addEventListener("click",stopInterval);
function stopInterval(){
    clearInterval(intervalle);
}




