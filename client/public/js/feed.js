function checkPortalPress(e) {
    goToLocation("https://capybarafacts.com");

}

document.getElementById("portal_button").addEventListener("click", checkPortalPress);



function feedItem(title, body, linkUrl,imageUrl) {
this.title= title;
this.body=body;
this.linkUrl=linkUrl;
this.imageUrl=imageUrl;
}

let story1 = new feedItem("Capybara", "Im a cutie", "https://bit.ly/3nNnKJa", "https://bit.ly/3P6wcio");
let story2 = new feedItem("Eren Yeager", "Marley really the ops", "https://bit.ly/2lXCI2t", "https://bit.ly/3AzwdXS");
let story3 = new feedItem("CapyCool", "Sup girl", "https://bit.ly/3bTd7lg", "https://bit.ly/3yMuL3a");


let currentStories = [story1,story2,story3];

function displayItem(param1){
    for(var i=0;i<param1.length;i++){
        let item = param1[i];
            document.getElementById("newsfeed").innerHTML += "<img class = 'feedImage' src="+item.imageUrl+">"+"<br>"+"<a href ='"+item.linkUrl+"'>"+item.title+ "</a>"+"<p>"+item.body+"</p>";

    }
}

window.addEventListener("load",displayItem(currentStories));