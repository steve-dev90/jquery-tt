// Challenge 1: Can you make TOM1 change color!
// Hint: use the css color property and jquery like this $("some selector").css("color", "some color")
// Don't worry if the button only works once - that is good enough!

// Challenge 2: Can you make TOM2 change size!
// Extra big points if you can make the size keep on changing when you keep clicking the button.
// For the extra challenge use the variable tomSize in the same sort of way as
// the variable upPosition is used to change the position of TOM3

var tomSize = 12

$(".size-button").click(function() {

  tomSize = tomSize + 2
  console.log(tomSize)
  //
})

// This sets the variable upPosition to zero when the page load
var upPosition = 0

$(".up-button").click(function() {
  // Challenge 3: Can you make TOM 3 stop going up after 3 or 4 clicks! Stop Tom!
  // Hint: use an javascript if statement. For example:
  //
  // if someVariable > -120 {
  //  put your code here
  // }
  // Have a go googling javascript if statements

  upPosition = upPosition -20
  $("#tom3").css("top", upPosition + 'px');
})



