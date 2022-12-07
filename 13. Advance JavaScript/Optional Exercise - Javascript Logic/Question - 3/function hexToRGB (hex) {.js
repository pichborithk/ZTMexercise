function hexToRGB(hex) {
  result = '';
  if (hex.length === 7) {
    let r = hex[1] + hex[2];
    let g = hex[3] + hex[4];
    let b = hex[5] + hex[6];
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    result = `rgb(${r}, ${g}, ${b})`;
  } else if (hex.length === 4) {
    let r = hex[1];
    let g = hex[2];
    let b = hex[3];
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    result = `rgb(${r}, ${g}, ${b})`;
  } else {
    result = `Insert wrong HEX code`;
  }
  return result;
}

console.log(hexToRGB('#80ff00'));

const rgbToHex = (red, green, blue) => {
  let r = red.toString(16);
  let g = green.toString(16);
  let b = blue.toString(16);
  return `#${r}${g}${b}`;
};

console.log(rgbToHex(255, 150, 0));
