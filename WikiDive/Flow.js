chrome.webNavigation.onCompleted.addListener(onLoaded, {
  url: [
    {hostSuffix: "wikipedia.org"}
  ]
});

function onLoaded(event){
  console.log(event);

}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(url.txt)
}