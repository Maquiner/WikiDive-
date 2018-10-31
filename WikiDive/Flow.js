var Flow = [];
Flow.push(Math.random());

chrome.runtime.onMessage.addListener(gotUrl);

function gotUrl(msg, sender, sendResponse){
    console.log(msg);
    Flow.push(msg);
    setTimeout(sessionreset,10000)
};

//function sessionreset () {
  //  var output = Flow;
   // if (output.length > 1) {
   // var hiddenElement = document.createElement('a');
   // hiddenElement.href = encodeURI(output);
   // hiddenElement.download = 'output.csv';
   // hiddenElement.click();}
 
 //   Flow =[];
  //  Flow.push(Math.random());}
    
function sessionreset () {
    var output = Flow.toString();
    if (Flow.length > 1) {
    download(output, "dlText.txt", "text/plain");}
 
    Flow =[];
    Flow.push(Math.random());}


console.log(Flow.length);



//<div>
//<button type="button" id="download">Download Data Dive</button>
//</div>
