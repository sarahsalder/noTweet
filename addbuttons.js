var toolbar = document.getElementsByClassName("TweetBoxToolbar")[0];
var button = document.createElement("button");
var text = document.createTextNode("test");
button.appendChild(text);
toolbar.appendChild(button);

console.log('hay')