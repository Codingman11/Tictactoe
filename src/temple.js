import "./styles.css";
import { parse } from "path";

var pla1 = "X",
  pla2 = "O";

let moves = 0;

//Creating array
function createArray() {
  let array = [];

  return array;
}

function addTable(array) {
  let x = 0;

  let cTable = document.createElement("table");
  cTable.setAttribute("id", "table");
  for (let i = 0; i < 5; i++) {
    let addTr = document.createElement("tr");

    for (let j = 0; j < 5; j++) {
      let addTd = document.createElement("td");
      addTd.setAttribute("id", x);
      addTd.setAttribute("class", "cell");

      array[x] = x.toString();
      let node = document.createTextNode("");
      addTd.appendChild(node);
      addTr.appendChild(addTd);
      x++;
    }

    cTable.appendChild(addTr);
    let tab = document.getElementById("board");
    tab.appendChild(cTable);
  }
}

const array = createArray();
addTable(array);

function winCondition(moves, cells) {
  if (moves === array.length) {
    alert("draw");
  }
  console.log(array);
}

function test() {
  let cells = document.querySelectorAll(".cell");
  let turn = 0;

  var getId;
  getId = function() {
    var el = this;

    let arId = parseInt(el.id, 10);
    console.log(arId);

    if (turn === 0) {
      el.classList.add("x");
      el.innerHTML = pla1;

      turn = 1;
      array[arId] = pla1;
    } else if (turn === 1) {
      el.classList.add("o");
      el.innerHTML = pla2;
      turn = 0;
      array[arId] = pla2;
    }

    moves++;
    console.log("Moves: " + moves);
    winCondition(moves, cells);

    //move();
  };

  for (var i = 0; i < cells.length; i++) {
    let j = cells[i].addEventListener("click", getId);
  }
}

/*for (var a = 0; a < array.length; a++) {
    console.log(array[a]);
  }*/
/*function move() {
  var elem = document.getElementById("myBar");
  let width = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width += 10;
      elem.style.width = width + "%";
    }
  }
  width = 0;
  return id;
}
var m = move();*/
test();
