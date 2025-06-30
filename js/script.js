let outputText = document.getElementById("outputText");
let inputText = document.getElementById("inputText");
let delBtn = document.getElementById("delBtn");

// Step 01
inputText.addEventListener("keyup", () => {
  if (inputText.value == "Delete") {
    delBtn.removeAttribute("disabled");
  } else delBtn.setAttribute("disabled", true);
});

// Step 02
delBtn.addEventListener("click", () => {
  outputText.style.display = "none";
  inputText.value = "";
});






// Odd And Even Number Check


let heading = document.getElementById("heading");
let evenOddInp = document.getElementById("evenOddInp");
let evenOddBtn = document.getElementById("evenOddBtn");
let result = document.getElementById("result")


 
evenOddBtn.addEventListener("click", () => {

       let number = evenOddInp.value 
            
    
  
  
    if (Number % 2 == 0) {
    console.log(Number + " " + "is a even number.");

 
  } 

  else {
    console.log(Number + " " + "is a odd number.");
  }



});
