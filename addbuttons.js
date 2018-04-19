let toolbars = document.getElementsByClassName("TweetBoxToolbar");
let icons = document.getElementsByClassName("icon-btn");
let tweetButtons = document.getElementsByClassName("tweet-action");

const ghandiQuotes = [
  'You must be the change you wish to see in the world.',
  'The weak can never forgive. Forgiveness is the attribute of the strong.',
  'Happiness is when what you think, what you say, and what you do are in harmony.',
  'An eye for eye only ends up making the whole world blind.',
  'Live as if you were to die tomorrow; learn as if you were to live forever.',
  'First they ignore you, then they laugh at you, then they fight you, then you win.',
  'You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.',
  'The best way to find yourself is to lose yourself in the service of others.'
]

function addButtons(toolbar) {
  let buttons = [
    {
      type: 'friend',
      name : document.createTextNode("Tell a Friend"), 
      action: function() {
        window.open('https://www.messenger.com','_blank');
        
      }
    },
    {
      type: 'transcendence',
      name : document.createTextNode("Let it Go"), 
      action: function() {


        const body = document.getElementsByTagName('body')[0]
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        const randomPosition = Math.floor(Math.random()*ghandiQuotes.length);
        var div = document.createElement('div');
        const content = ghandiQuotes[randomPosition];
        div.innerHTML = content;

        body.appendChild(div);
        div.classList.add('quote')

        var speaker = document.createElement('div');
        speaker.innerHTML = '&hearts; Mahatma Gandhi';
        speaker.classList.add('speaker');
        body.appendChild(speaker);

        var img = document.createElement("img");
        img.style.position = 'absolute';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.top = "0";
        var imgURL = chrome.extension.getURL("fire.gif");
        img.src = imgURL;

      
        body.appendChild(img);

        fade(img);
      }
    }
  ]
  for (let el of buttons) {
    var button = document.createElement("button");
    button.appendChild(el.name);
    button.classList.add('no-tweet-button')
    button.classList.add('EdgeButton')
    button.classList.add('EdgeButton--primary')
    button.classList.add('js-tweet-btn')
    if (el.type === 'friend') {
      button.style.marginLeft = '6px';
      button.style.marginRight = '6px';
    }
    button.addEventListener("click", el.action)
    toolbar.appendChild(button);
  }
}

function removePadding(icon) {
  icon.style.padding = '2px';
  icon.style.margin = '2px';
}

function fade(element) {
  var op = 1;  
  var timer = setInterval(function () {
      if (op <= 0.3){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 100);
}

for (let toolbar of toolbars) {
  addButtons(toolbar);
}

for (let icon of icons) {
  removePadding(icon);
}

for (let button of tweetButtons) {
  button.classList.remove("disabled");
  button.disabled = false;
  button.classList.add('no-tweet-button');
  button.classList.add('EdgeButton');
  button.classList.add('EdgeButton--primary');
  button.classList.add('js-tweet-btn');
}
