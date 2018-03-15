let today = getToday();
let centuryAgo = getCenturyAgo();



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
    
    centuryAgo = mm + '/' + dd + '/' + yyyy;
    return centuryAgo;
}



$(document).ready(() => {
    alert(today);
    alert(centuryAgo);
});
