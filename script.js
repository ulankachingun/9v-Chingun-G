let currentShape = 1; 
  let currentFontSize = 12;
  let currentColorIndex = 0;
  const colors = ['pink', 'cyan', 'purple'];

  function changeShapeFontColor() {
    const shapeDiv = document.getElementById('shape');
    const button = document.querySelector('button');
    const body = document.body;

    
    if (currentShape === 1) {
      shapeDiv.style.borderRadius = '50%';
      shapeDiv.style.clipPath = 'circle(50% at center)';
      currentShape = 2;
    } else if (currentShape === 2) {
      shapeDiv.style.borderRadius = '0';
      shapeDiv.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
      currentShape = 3;
    } else {
      shapeDiv.style.borderRadius = '0';
      shapeDiv.style.clipPath = 'none';
      currentShape = 1;
    }

    
    if (currentFontSize === 12) {
      currentFontSize = 16;
    } else if (currentFontSize === 16) {
      currentFontSize = 24;
    } else {
      currentFontSize = 12;
    }

    
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    body.style.backgroundColor = newColor;

    
    button.style.fontSize = currentFontSize + 'px';
  }