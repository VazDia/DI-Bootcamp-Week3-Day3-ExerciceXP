/*
Copy the code above, to a structured HTML file.
In your Javascript file add the functionality which will allow you to drag the box and drop it into the target.
 Check out the Course Notes named DOM animations.
*/


// This is the function which will be used to drag the element;
function drag(e){
    e.dataTransfer.setData("text",e.target.id)
    
}

// This is the function which will be used to drop the element;
function drop(e){
    e.preventDefault();
    let element=e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(element))
    document.getElementById(element).style.marginLeft="75px";
    document.getElementById(element).style.marginTop="75px";
    
}

// function which will allow the dropping of the element 
function dropField(e){
    e.preventDefault();
}
