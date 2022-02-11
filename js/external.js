
/** Default color variant selection */
function defaultBlackSelection() {
    document.getElementById("chooseGray").classList.remove("highlightColorVariant");
    document.getElementById("chooseBlack").classList.add("highlightColorVariant");
}

/**
 * OnLoad function where Black color variant is selected as default
 */
window.onload = function () {
    defaultBlackSelection();
};

/**
 * onClick select color variant function
 *  */
function selectColor(color) {
  if (color === "black") {
    defaultBlackSelection();
  }
  if (color === "gray") {
    document.getElementById("chooseGray").classList.add("highlightColorVariant");
    document.getElementById("chooseBlack").classList.remove("highlightColorVariant");
  }
}

