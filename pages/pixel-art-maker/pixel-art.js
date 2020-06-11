window.onload = function() {
  // canvas
  let canvas = document.querySelector('#canvas');
  let activeColor = '#556270'
  
  for(let i = 0; i < 6400; i++) {

    let pixel = document.createElement('span');
    pixel.setAttribute('class', 'pix')
    pixel.style.height = '10px';
    pixel.style.width = '10px';

    let x = i + Math.floor(i / 80);
    if(x % 2 === 0) {
      pixel.style.backgroundColor = 'white';
    }
    else {
      pixel.style.backgroundColor = 'white';
    }

    pixel.addEventListener('click', function(event){
      pixel.style.backgroundColor = activeColor
    });

    canvas.appendChild(pixel);
  }

  // Custom Color

  let colorPicker = document.querySelector('#color-picker');
  colorPicker.value = activeColor
  colorPicker.addEventListener("input", watchColorPicker, false);
  colorPicker.addEventListener("change", watchColorPicker, false);
  
  function watchColorPicker(event) {
    activeColor = event.target.value;
  }
  
  // Color Palette
  let colorPalette = document.querySelector('#color-palette');
  let colorChoices = ['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58' ];
  for(let color of colorChoices) {
    let paletteSlot = document.createElement('span');
    paletteSlot.style.border = '1px solid white';
    paletteSlot.style.height = '18px';
    paletteSlot.style.width = '18px';
    paletteSlot.style.backgroundColor = color;

    paletteSlot.addEventListener('click', function(event){
      activeColor = color
      colorPicker.value = color
    });
    
    colorPalette.appendChild(paletteSlot);
  }

  // buttons
  let clearCanvas = document.querySelector('#clear-canvas');
  clearCanvas.addEventListener('click', function(event){
    let pixels = document.getElementsByClassName("pix");
    let len =  pixels.length;
    
    for(let i=0 ; i<len; i++){
       pixels[i].style.backgroundColor = "white";
    }
  });

  let autoPaint = document.querySelector('#auto-paint');
  autoPaint.addEventListener('click', function(event){
    let pixels = document.getElementsByClassName("pix");
    let len =  pixels.length;
    
    for(let i=0 ; i<len; i++){
       pixels[i].style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
    }
  });

}