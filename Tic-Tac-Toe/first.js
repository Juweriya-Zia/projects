/*let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
];

const resetGame = () => {
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
   box.addEventListener("click", () => {
      if(turnO) {
         box.innerText = "O";
         turnO = false;
      } else {
         box.innerText = "X";
         turnO = true;
      }
      box.disabled = true;

      checkwinner();
      checktie();
   });  
});

const disableBoxes = () => {
   for(let box of boxes) {
      box.disabled = true;
   }
};

const enableBoxes = () => {
   for(let box of boxes) {
      box.disabled = false;
      box.innerText = "";
   }
};

const showWinner = (winner)  => {
   msg.innerText =`Congratulation, winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};
const checkwinner = () => {
   for(let pattern of winPattern){

      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
      if(pos1val != "" && pos2val != "" && pos3val != ""){
         if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
         }
      }
    }
   };

   const checktie = () =>{
      let filled = true;
      boxes.forEach((box) => {
         if(box.innerText === ""){
            filled = false;
         }
      });

      if(filled && msgContainer.classList.contains("hide")){
         msg.innerText = "Its is a Tie";
         msgContainer.className.remove("hide");
         disableBoxes();
      }
   };

   newGameBtn.addEventListener("click",resetGame);
   resetbtn.addEventListener("click",resetGame);*/


  let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let isGameOver = false; // Flag to stop clicks after win or tie

const winPattern = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];

// Reset game function
const resetGame = () => {
   turnO = true;
   isGameOver = false;
   enableBoxes();
   msgContainer.classList.add("hide");
};

// Add event listeners to each box
boxes.forEach((box) => {
   box.addEventListener("click", () => {
      if (isGameOver || box.innerText !== "") return;

      if (turnO) {
         box.innerText = "O";
         turnO = false;
      } else {
         box.innerText = "X";
         turnO = true;
      }

      box.disabled = true;

      checkWinnerOrTie();
   });
});

// Disable all boxes
const disableBoxes = () => {
   for (let box of boxes) {
      box.disabled = true;
   }
};

// Enable all boxes and clear text
const enableBoxes = () => {
   for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
   }
};

// Show winner message
const showWinner = (winner) => {
   msg.innerText = `🎉 Congratulations, winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
   isGameOver = true;
};

// Show tie message
const showTie = () => {
   msg.innerText = "😐 It's a Tie!";
   msgContainer.classList.remove("hide");
   isGameOver = true;
};

// Check winner or tie
const checkWinnerOrTie = () => {
   for (let pattern of winPattern) {
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;

      if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
         if (pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return; // Exit on win
         }
      }
   }

   // Check for tie
   let filledBoxes = Array.from(boxes).every(box => box.innerText !== "");
   if (filledBoxes) {
      showTie();
   }
};

// Reset and New Game buttons
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
 

   