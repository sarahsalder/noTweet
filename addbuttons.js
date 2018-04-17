let toolbars = document.getElementsByClassName("TweetBoxToolbar");
let icons = document.getElementsByClassName("icon-btn");
let tweetButtons = document.getElementsByClassName("tweet-action");

const ghandiQuotes = [
  'You must be the change you wish to see in the world. – Mahatma Gandhi',
  'The weak can never forgive. Forgiveness is the attribute of the strong. – Mahatma Gandhi',
  'Happiness is when what you think, what you say, and what you do are in harmony. – Mahatma Gandhi',
  'An eye for eye only ends up making the whole world blind. – Mahatma Gandhi',
  'Live as if you were to die tomorrow; learn as if you were to live forever. – Mahatma Gandhi',
  'First they ignore you, then they laugh at you, then they fight you, then you win. – Mahatma Gandhi',
  'You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty. – Mahatma Gandhi',
  'The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi'
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
        const randomPosition = Math.floor(Math.random()*ghandiQuotes.length);
        const content = ghandiQuotes[randomPosition];
        const gif = '<blockquote class="imgur-embed-pub" lang="en" data-id="a/yF1gV"><a href="//imgur.com/yF1gV"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>';
        const body = document.getElementsByTagName('body')[0]
        body.innerHTML = content; 
        body.style.textAlign = 'center';
        body.style.top = '40%';
        body.style.maxWidth = '606px';
        body.style.margin = '0 auto';
        body.style.fontSize = '25px';
        boyd.style.fontStyle = 'italic';
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

// const tweetButton = document.getElementsByClassName("TweetBoxToolbar-tweetButton");
// tweetButton.style.marginLeft = '10px'
// tweetButton.style.marginRight = '0px'

function addPicToTweet() {
  // url argument can be something like 'https://api.github.com/users/daspinola/repos'

    function request(url) {
      
    }

}
