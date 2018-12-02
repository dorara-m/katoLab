var currentLink = location.pathname;
console.log(currentLink);

var currentText = currentLink.substr(1,currentLink.length - 2);

//faculty/xx.htmlのための一時的対策
if (currentText.length > 15) {
  currentText = 'faculty';
}
console.log(currentText);
$(`#js-menu .${currentText}`).addClass('c-active');