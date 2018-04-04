let toolbars = document.getElementsByClassName("TweetBoxToolbar");

function addButtons(toolbar) {
  let buttons = [
    {
      name : document.createTextNode("Text a Friend"), 
      action: function() {
        // opens messages, falls back to messenger
      }
    },
    {
      name : document.createTextNode("Tell Your Therapist"), 
      action: function() {
        // opens email (or maybe article on the benefits of having a therapist)
      }
    },
    {
      name : document.createTextNode("Let it Go"), 
      action: function() {
        const xhr = new XMLHttpRequest();
        xhr.timeout = 2000;
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
            console.log(e)
            } else {
              console.log(e)
            }
          }
        }
        xhr.ontimeout = function () {
          console.log('timeout')
        }
        xhr.open('get', 'https://api.giphy.com/v1/gifs/search?api_key=lvw09FHcNNM92eoAkwgsVM8o761SRb4N?q=cute', true)
        xhr.send();
      }
    }
  ]
  for (let el of buttons) {
    var button = document.createElement("button");
    button.appendChild(el.name);
    button.classList.add('no-tweet-button')
    button.addEventListener("click", el.action)
    toolbar.appendChild(button);
  }
}

for (let toolbar of toolbars) {
  addButtons(toolbar);
}

function addPicToTweet() {
  // url argument can be something like 'https://api.github.com/users/daspinola/repos'

    function request(url) {
      
    }

}
