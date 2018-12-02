var currentLink = location.pathname;
// console.log(currentLink);

var currentText = currentLink.substr(1,currentLink.length - 2);
// console.log(currentText);

$(`#js-menu .${currentText}`).addClass('c-active');