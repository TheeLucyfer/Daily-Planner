$(document).ready(function(){
    $(".currentDate").text(moment().format("dddd, MMMM Do"));
    
    for (let i = 9; i < 18; i++) {
    
        // create a row
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // create a column
        var col1 = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

        //create column 2
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);        
       
        //create column 3
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
        
        // append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // last step add rows to container
        $(".container").append(row);

        // getLocalStorage(i);
    }

    function formatAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }


function amPM (hour){
    if(amPM>= 12){
        'pm'
    }
    else {
        'pm'
    }
}


function colors(){
    var currentTime = new Date().getHours();
    for (var i = 9; i < 18; i++) {

        if (i == currentTime) {

            $(`#text${i}`).addClass("current");

        } else if (currentTime < i) {
            
            $(`#text${i}`).addClass("future");
        }
    }
}

colors()





































})