let today = getToday();
let formatCenturyAgo = getCenturyAgo();


function getUrl(query, date) {    
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
    'api-key': "8193f525f86b469ebf80faa41dd82271",
    'q': query,
    'begin_date': date,
    'end_date': date,
    });
    return url;
}

function onSubmit() {
    let q = $("#query").val()
    let url = getUrl(q, formatCenturyAgo);
    $.getJSON(url, (result) => {
        $("p").html(JSON.stringify(result));
    });
}

function getToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    
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
    $("#ping").on("submit", (e) => {
        e.preventDefault();
        onSubmit();
    })
});
