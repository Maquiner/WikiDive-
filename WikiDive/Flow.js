var Flow = [];

Flow.push(guid());

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }


chrome.runtime.onMessage.addListener(gotUrl);

function gotUrl(msg, sender, sendResponse){
    console.log(msg);
    Flow.push(msg);
    setTimeout(sessionreset,10000)
};

function sessionreset () {
    var output = Flow;
    if (output.length > 1) {
    var hiddenElement = document.createElement('a');
    hiddenElement.href =  "data:text/csv," + encodeURI(output.join("\n"));
    hiddenElement.download = 'output.csv';
    hiddenElement.click();}
 
    Flow =[];
    Flow.push(guid());}
    


console.log(Flow.length);

