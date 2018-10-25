var links = document.getElementsByTagName('a');

var urls = [];

for(i in links){
    let url = links[i].href;
    if( url.includes("%") 
    //|| !url.includes(".svg") || url != ""
    //|| !url.includes(".png")|| !url.includes(".jpg")|| !url.includes("Help")
    //|| !url.includes("wiktionary")|| !url.includes("#")|| !url.includes(":")|| !url.includes("*%*")
    //|| !url.includes("-")
    ){
        urls.push(url);
    }   
}
chrome.tabs.sendMessage.(browser, urls)
console.log(urls);