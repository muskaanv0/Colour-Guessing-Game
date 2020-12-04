var numSq=6;  //to tale record of num of Squares in each mode
var colors = generateRandomColors(numSq);
var pickedColor=pickColor(); 

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

var colorDis=document.getElementById("colorDisplay");
colorDis.textContent= pickedColor;

var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var resetButton=document.querySelector("#reset");
var msgDis=document.getElementById("msg");
var h1 = document.querySelector("h1");
var squares=document.querySelectorAll(".square");

for(var i=0 ; i<squares.length ; i++){
	//assign initial colors to the square
	squares[i].style.background= colors[i];
    
    //add click listener
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.background;
        
        //compare
        if(clickedColor===pickedColor){
            changeColor(clickedColor);
           	msgDis.textContent="CORRECT :)";
			h1.style.background = clickedColor;
			resetButton.textContent="Play Again?";
        }        	

        else{
        	this.style.background="#32292f";   //this here refers to the current squares[i]
        	msgDis.textContent="TRY AGAIN :(";    	
        }
 	})
} 

function changeColor(color){
	//loop thru all the square
	for(var i=0 ; i<squares.length ; i++){
	//change each square to the clicked color   
	  squares[i].style.background=color;
	}
}

 //num is the number of random colors we want 3/6
function generateRandomColors(num){   
    //make an empty arr
    var arr=[];

    //repeat num times
    for(var i=0 ; i<num ; i++){
    	//get random color and push into arr
    	arr.push(RandomColor()); 
    }
    //return that array
    return arr;
}

function RandomColor(){
	//pick a red from 0-255
    var r=Math.floor(Math.random() * 256);

	//pick a green from 0-255
    var g=Math.floor(Math.random() * 256);

	//pick a blue from 0-255
    var b=Math.floor(Math.random() * 256);

    // "rgb(r, g, b)" spaces matter

    return "rgb(" + r + ", " + g + ", "  + b + ")";
}

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSq);
	pickedColor=pickColor(); 
	colorDis.textContent= pickedColor;
	this.textContent="New colors";

	for(var i=0 ; i<squares.length ; i++){
	squares[i].style.background= colors[i];
    }
      
     msgDis.textContent="";

     h1.style.background="#3aafa9";
})

easy.addEventListener("click", function(){
 easy.classList.add("selected");
 hard.classList.remove("selected");
 numSq=3;
 colors = generateRandomColors(numSq);
 pickedColor=pickColor(); 
	
 for(var i=0; i<squares.length ; i++){
 	if(colors[i]){  //if colors[i] exist at that indx 
        squares[i].style.background=colors[i];
 	}

 	else{
 		squares[i].style.display="none";
 	}
 }
})

hard.addEventListener("click", function(){
 hard.classList.add("selected");
 easy.classList.remove("selected");
 numSq=6;
 colors = generateRandomColors(numSq);
 pickedColor=pickColor(); 
	
 for(var i=0; i<squares.length ; i++){ 	
        squares[i].style.background=colors[i];
 		squares[i].style.display="block";
 }
})

