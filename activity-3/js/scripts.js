// welcome message
var user = "Rick";
var salutation = "Hello";
var greeting = salutation + user + "! Here are the latest Atom reviews";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

// product price
var price= 20,
studentDiscount = 0.1,
studentPrice = price - price * studentDiscount;

var priceEl = document.getElementById("price");
var studentPriceEl = document.getElementById("studentPrice'");

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice,toFixed(2);
