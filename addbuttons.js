let toolbars = document.getElementsByClassName("TweetBoxToolbar");

function addButtons(thing) {
  let buttons = [
    {
      name : document.createTextNode("Text a Friend")
    },
    {
      name : document.createTextNode("Tell Your Therapist Later")
    },
    {
      name : document.createTextNode("Write an Op-Ed")
    }
  ]
  for (let el of buttons) {
    var button = document.createElement("button");
    button.appendChild(el.name);
    thing.appendChild(button);
  }
}

for (let toolbar of toolbars) {
  addButtons(toolbar)
}
