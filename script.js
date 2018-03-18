let today = getToday();
let formatCenturyAgo = getCenturyAgo();


function getUrl(query, date) {    
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    let parameters = {
        'api-key': "8193f525f86b469ebf80faa41dd82271",
        'q': query,
        'begin_date': date,
        'end_date': date,
        }

        if (parameters.q === "") {
            delete parameters.q;
        }

    url += '?' + $.param(parameters);
    return url;
}

function onSubmit() {
    let q = $("#query").val()
    
    let url = getUrl(q, formatCenturyAgo);
    $.getJSON(url, (result) => {
        
        //$(".result").html(JSON.stringify(result));
        $(".list-group").html(htmlDisplay(result.response.docs)); 

    });
}

function randomArticleUrl() {
    let url = getUrl("", formatCenturyAgo);
    $.getJSON(url, (result) => {
        $(".result").html(result.response.docs[Math.floor(Math.random() * result.response.docs.length)].web_url);
         (result.response.docs[Math.floor(Math.random() * result.response.docs.length)].web_url);
       

    });
}

function htmlDisplay(docs) {
    let html = "";
    
    if (docs.length != 0) {
        for (let i = 0; i < docs.length; i++) {
            html += "<li class='list-group-item'><p><b><a href=" + docs[i].web_url + ">" + docs[i].headline.main + "</a></b><br>(Word Count: " + docs[i].word_count + ")</p><hr>"
            html += "<p>" + docs[i].snippet + "</p></li>"
            html += ""
        }
    }
    else {
        html += "<p align='center'>No Matches</p>"
    }
    return html;
}

function getToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear() - 100;
    
    
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

function getCenturyAgo() {
    let centuryAgo = new Date();
    let dd = centuryAgo.getDate();
    let mm = centuryAgo.getMonth()+1; //January is 0!
    let yyyy = centuryAgo.getFullYear() - 100;
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    
    centuryAgo = (yyyy + mm + dd);
    return centuryAgo;
}



$(document).ready(() => {
    $("#intro").html("Search newspaper articles from " + today)
    $("#random").click((e) => {
        let url = getUrl("", formatCenturyAgo);
        $.getJSON(url, (result) => {
            //$(".result").html(result.response.docs[Math.floor(Math.random() * result.response.docs.length)].web_url);          
             $(location).attr('href', (result.response.docs[Math.floor(Math.random() * result.response.docs.length)].web_url)); //random url of article with no search query   
        });       
    });
    $("#ping").on("submit", (e) => {
        e.preventDefault();
        onSubmit();
    })
});
