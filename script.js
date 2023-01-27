const container = document.querySelector(".grid-container");
let max = 1000;
container.style.maxWidth = `${max}px`;
container.style.maxHeight = `${max}px`;

let gridSize = 25;

renderGrid(gridSize);
// let size = 25;
function renderGrid (size){
    container.style.gridTemplateColumns = `repeat(${size},${(max/size)}px)`;
    // container.style.gridTemplateColumns = `repeat(${size},1)`;

    for (let i = 0; i < (size**2); i++){
        const div = document.createElement('div');
        div.classList.add('grid-cell');
        // div.style.padding = '10px';
        div.style.backgroundColor = 'rgb(234, 233, 233';
        container.appendChild(div);
    }

    const cells = document.querySelectorAll(".grid-cell");

        cells.forEach((cell) => {

            let cellSize = max/size;
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
        });

    fillCellColor();
    

}

function fillCellColor(type="normal"){
    const cells = document.querySelectorAll(".grid-cell");
    if (type === "normal"){
        

        cells.forEach((cell) => {
            cell.addEventListener('mouseover',() => {
                cell.style.backgroundColor = 'red';
            })
        });
    } else {
        const rainbowColors = ['red','orange','yellow','green','blue','purple'];
        let i = 0;
        cells.forEach((cell) => {
            cell.addEventListener('mouseover',() => {
                cell.style.backgroundColor = rainbowColors[(i++)%6];
            })
        });
    }

}



function eraseCells (){
    const cells = document.querySelectorAll(".grid-cell").forEach(e => e.remove());

}

const defaultButton = document.querySelector(".default-btn");
defaultButton.addEventListener('click', ()=>{
    fillCellColor("normal");
});

const rainbowButton = document.querySelector(".rainbow-btn");
rainbowButton.addEventListener('click', ()=>{
    fillCellColor("rainbow");
});


const resizeButton = document.querySelector(".resize-btn");
resizeButton.addEventListener('click', ()=>{
    size = Number(prompt("Enter the size (maximum 100) of your grid. It will be size x size big."));
    while (size > 100 || size === null) {
        size = Number(prompt("Re-enter the size (maximum 100) of your grid. Numbers greater than 100 won't render."));
    }
    eraseCells();
    renderGrid(size);
});

const eraseButton = document.querySelector(".erase-btn");
eraseButton.addEventListener('click', ()=>{
    const cells = document.querySelectorAll(".grid-cell");

    cells.forEach((cell) => cell.style.backgroundColor = 'rgb(234, 233, 233');
    }
);



