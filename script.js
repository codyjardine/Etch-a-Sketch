const container = document.getElementById('containerGrid');
const btnBlack = document.getElementById('btnBlack');
const btnRainbow = document.getElementById('btnRainbow');
const btnEraser = document.getElementById('btnEraser');
const btnClear = document.getElementById('btnClear');
const btnSmall = document.getElementById('cellSmall');
const btnMedium = document.getElementById('cellMedium');
const btnLarge = document.getElementById('cellLarge');
const headerText = document.getElementById('headerText');
const btnGridOn = document.getElementById('gridOn');
const btnGridOff = document.getElementById('gridOff');

btnBlack.addEventListener('click', () => {
  let color = 'black';
  getColor(color);
  btnBlack.style.backgroundColor = '#01b0d3';
  btnRainbow.style.backgroundColor = '#222';
  btnEraser.style.backgroundColor = '#222';
  headerText.style.color = 'white';
});

btnRainbow.addEventListener('click', () => {
  let color = 'rainbow';
  getColor(color);
  const rainbowww = document.querySelector('.header-text-rainbow');
  rainbowww.style.cssText += `background: linear-gradient(to right, #6666ff, #0099ff , #ffdd00, #00ff00, #ff3399, #6666ff);
                              -webkit-background-clip: text;
                              background-clip: text;
                              color: transparent;
                              animation: rainbow_animation 4s ease-in-out infinite;
                              background-size: 300% 100%;`
  btnBlack.style.backgroundColor = '#222';
  btnRainbow.style.backgroundColor = '#01b0d3';
  btnEraser.style.backgroundColor = '#222';

});

btnEraser.addEventListener('click', () => {
  let color = 'eraser';
  getColor(color);
  btnBlack.style.backgroundColor = '#222';
  btnRainbow.style.backgroundColor = '#222'
  btnEraser.style.backgroundColor = '#01b0d3';
  headerText.style.color = 'white';
});

btnClear.addEventListener('click', clear);

function gridSize(grid) {
  container.style.setProperty('--grid-rows', grid);
  container.style.setProperty('--grid-cols', grid);
}

function generateGrid(grid) {
  for (let i = 0; i < grid * grid; i++) {
    let cells = document.createElement('cell');
    cells.classList.add('cells');
    container.appendChild(cells);
  }
}

function getColor(color) {
  const cells = document.querySelectorAll('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function(e) {
      if (color == 'black') {
        e.target.style.backgroundColor = 'black';
      } else if (color == 'rainbow') {
        e.target.style.backgroundColor = rainbowColors();
      } else {
        e.target.style.backgroundColor = 'white';
      }
    });
  }
}


function rainbowColors() {
  const rainbowColors = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', 
                         '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff', '#ff0080'];
  const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  return randomColor;
}


function clear() {
  const allCells = document.querySelectorAll('.cells');
  allCells.forEach((allCells) => {
    allCells.style.backgroundColor = 'white';
  });
}

gridSize(32);
generateGrid(32);
btnMedium.style.backgroundColor = '#01b0d3';
btnGridOn.style.backgroundColor = '#01b0d3';

btnSmall.addEventListener('click', () => {
  btnSmall.style.backgroundColor = '#01b0d3';
  btnMedium.style.backgroundColor = '#222';
  btnLarge.style.backgroundColor = '#222';
  btnBlack.style.backgroundColor = '#222';
  btnRainbow.style.backgroundColor = '#222';
  btnEraser.style.backgroundColor = '#222';
  btnGridOn.style.backgroundColor = '#01b0d3';
  btnGridOff.style.backgroundColor = '#222';
  delGrid();
  gridSize(64);
  generateGrid(64);
})

btnMedium.addEventListener('click', () => {
  btnSmall.style.backgroundColor = '#222';
  btnMedium.style.backgroundColor = '#01b0d3';
  btnLarge.style.backgroundColor = '#222';
  btnBlack.style.backgroundColor = '#222';
  btnRainbow.style.backgroundColor = '#222';
  btnEraser.style.backgroundColor = '#222';
  btnGridOn.style.backgroundColor = '#01b0d3';
  btnGridOff.style.backgroundColor = '#222';
  delGrid();
  gridSize(32);
  generateGrid(32);
})

btnLarge.addEventListener('click', () => {
  btnSmall.style.backgroundColor = '#222';
  btnMedium.style.backgroundColor = '#222';
  btnLarge.style.backgroundColor = '#01b0d3';
  btnBlack.style.backgroundColor = '#222';
  btnRainbow.style.backgroundColor = '#222';
  btnEraser.style.backgroundColor = '#222';
  btnGridOn.style.backgroundColor = '#01b0d3';
  btnGridOff.style.backgroundColor = '#222';
  delGrid();
  gridSize(16);
  generateGrid(16);
})

function delGrid() {
  container.innerHTML = '';
}

btnGridOn.addEventListener('click', () => {
  const allCells = document.querySelectorAll('.cells');
  btnGridOn.style.backgroundColor = '#01b0d3';
  btnGridOff.style.backgroundColor = '#222';
  allCells.forEach((allCells) => {
    allCells.style.removeProperty('border');
    allCells.style.setProperty('border', '1px solid #444');
  })
})

btnGridOff.addEventListener('click', () => {
  const allCells = document.querySelectorAll('.cells');
  btnGridOn.style.backgroundColor = '#222';
  btnGridOff.style.backgroundColor = '#01b0d3';
  allCells.forEach((allCells) => {
    allCells.style.setProperty('border', 'none');
  })
})
