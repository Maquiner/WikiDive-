var Flow = [];

chrome.runtime.onMessage.addListener(gotUrl);

function gotUrl(msg, sender, sendResponse){
    console.log(msg);
    Flow.push(msg);
};

console.log(Flow);

chrome.runtime.sendMessage(Flow);