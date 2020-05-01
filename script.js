$(document).ready(function () {
    
    // grabbing the current day and putting it in that <p> tag
    $("#currentDay").text(moment());
    setInterval(function () {
        $("#currentDay").text(moment());
    }, 1000);

    // need to save to local storage
    $(".saveBtn").on("click", function () {
        // grabbing the textbox values and saving them to the 
        localStorage.setItem($(this).parent().attr("id"), $(this).siblings("textarea").val().trim())
    })

    // making function to check the hours and set the correct background color
    function checkHour() {
        // get current hour so I can check it with the time-block
        var currentHour = moment().hours();
        $(".time-block").each(function () {
            // need to grab the text area id number
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            // gotta get the id for saving to local storage
            var blockKey = $(this).attr("id");
            // get the localstorage item
            var blockDisplay = localStorage.getItem(blockKey)
            // need to print the saved 
            $(this).children("textarea").text(blockDisplay)
            if (blockHour < currentHour) {
                $(this).children("textarea").addClass("past");
            } else if (blockHour == currentHour) {
                $(this).children("textarea").addClass("present");
            } else if (blockHour > currentHour) {
                $(this).children("textarea").addClass("future");
            }
        })
    };

    // need to run the hours updater
    checkHour();


});

