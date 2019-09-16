import "./styles.css";

//Creating array
function createArray() {
  let array = [];

  for (let i = 0; i < 5; i++) {
    array[i] = new Array(5);
  }

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
      array[i][j] = x;
      let node = document.createTextNode(" ");
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

/*function test(cells) {
  for (let i = 0; i < cells.length; i++) {
    const t1 = document.getElementById(i);
    if (t1.firstChild.nodeValue === " ") {
      t1.firstChild.nodeValue = "X";
    } else {
      t1.firstChild.nodeValue = "O";
    }
  }
}

let el = document.getElementById("table");
el.addEventListener("click", test(cells), false);*/
let cells = document.querySelectorAll(".cell");

function test(cells) {
  var pla1 = "X",
    pla2 = "O";
  let turn = 0;
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
      if (turn === 0) {
        this.innerHTML = pla1;
        turn = 1;
      } else if (turn === 1) {
        this.innerHTML = pla2;
        turn = 0;
      }
    };
  }
}

test(cells);
