let toolbars = document.getElementsByClassName("TweetBoxToolbar");

function addButtons(toolbar) {
  let buttons = [
    {
      name : document.createTextNode("Text a Friend")
      //opens messenger
    },
    {
      name : document.createTextNode("Tell Your Therapist")
      // opens an email client
    },
    {
      name : document.createTextNode("Let it Go")
      // fetches a random puppy image from giphy
    }
  ]
  for (let el of buttons) {
    var button = document.createElement("button");
    button.appendChild(el.name);
    button.classList.add('no-tweet-button')
    toolbar.appendChild(button);
  }
}

for (let toolbar of toolbars) {
  addButtons(toolbar);
}
