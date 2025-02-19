console.log("Hello World");

document.addEventListener('DOMContentLoaded', () => {
    console.log("Loaded content");


    const changeButton = document.getElementById("change-block");
    const blockColor = document.getElementById("block-color");


    const colors = ["#ff0000", "#000000", "#ff87ff", "#0000ff"];

           
    let i = 0;
    
    changeColor = () => {

 
        console.log("Button clicked!"); 
        blockColor.style.backgroundColor = colors[i];
        //Resets the array to the begginning. Could use if statements but then you would have to hard code the number for which index should return back to the first element in the array after the last iteration. 
        i = (i + 1) % colors.length;
    }

    
    
    changeButton.addEventListener("click", changeColor);
})