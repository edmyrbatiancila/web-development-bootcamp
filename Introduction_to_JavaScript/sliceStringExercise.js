var yourMessage = prompt("What is your tweet for today?");

var sliceMessage = yourMessage.slice(0, 140);

alert("Your Message is: " + sliceMessage);