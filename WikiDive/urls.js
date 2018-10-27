var links = document.getElementsByTagName('a');

var time = Date.now();
var time2 = time.toString();

var current = window.location.toString();

var urls = [];

urls.push(time2);
urls.push(current);

for(i in links){
    let url = links[i].toString();
    if(!url.includes("%") 
    & url != ""
    & !url.includes(".svg")  
    & !url.includes(".png") 
    & !url.includes(".jpg") 
    & !url.includes("wiktionary") 
    & !url.includes("#")
    & !url.includes("+")
    & !url.includes("&")
    & !url.includes("=")
    & !url.includes("?")
    & !url.includes("*%*")
    & !url.includes("-")
    ){
        urls.push(url);
    }   
}



console.log(urls);
var hiddenElement = document.createElement('a');
    hiddenElement.href = 'urls:text/csv;charset=utf-8,' + encodeURI(urls);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'urls.csv';
    hiddenElement.click();


//how do I ger the Ip of the user?
//how do I export urls?




