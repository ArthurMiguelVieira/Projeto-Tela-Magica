let container = document.querySelector("#container");
let gridSizeElement = document.querySelector("#gridSize");
let color = document.querySelector("#color");
let rainbow = document.querySelector("#rainbow");
let gridSize = 10;
let rainbowOn = false;

gridSizeElement.value = gridSize;

rainbow.addEventListener("click", function() {
    rainbowOn = !rainbowOn;
    if (rainbowOn) {
        rainbow.style.backgroundColor = "green";
    } else {
        rainbow.style.backgroundColor = "red";
    }
});

function rainbowColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        const hue = i * (360 / numColors);
        colors.push(`hsl(${hue}, 100%, 50%)`);
    }
    return colors;
}

function createGrid(gridSize) {
    container.innerHTML = "";
    const colors = rainbowColors(gridSize * gridSize);
    for (let index = 0; index < gridSize * gridSize; index++) {
        let novoDiv = document.createElement("div");
        novoDiv.style.width = `${400/gridSize}px`;
        novoDiv.style.height = `${400/gridSize}px`;
        novoDiv.addEventListener("mouseover", function() {
            if (rainbowOn) {
                const colorIndex = Math.floor((index / (gridSize * gridSize)) * colors.length);
                this.style.backgroundColor = colors[colorIndex];
            } else {
                this.style.backgroundColor = color.value;
            }
        });
        container.appendChild(novoDiv);
    }
}

createGrid(gridSize);

gridSizeElement.addEventListener('input', function() {
    gridSize = gridSizeElement.value;
    createGrid(gridSize);
});
