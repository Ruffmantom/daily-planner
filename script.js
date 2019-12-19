$(document).ready(function () {
    // code below this
    var description = $('.description');
    // var time = moment().hours();
    // console.log(time);

    var saved = localStorage.getItem('task');
    console.log(saved)

    // when the button gets clicked
    $('.saveBtn').on('click', function () {
        // want it to get the data in the input and save it to a new key
        generateKey()

    })
    description.text(saved)

    // function for creating keys with every click
    function generateKey() {
        var comment = $.trim($('#task-9').val());
        if (comment != '') {
            localStorage.setItem('task-1', comment)
        }
        var comment1 = $.trim($('#task-10').val());
        if (comment1 != '') {
            localStorage.setItem('task-2', comment1)
        }
        var comment2 = $.trim($('#task-11').val());
        if (comment2 != '') {
            localStorage.setItem('task-3', comment2)
        }
        var comment3 = $.trim($('#task-12').val());
        if (comment3 != '') {
            localStorage.setItem('task-4', comment3)
        }
        var comment4 = $.trim($('#task-13').val());
        if (comment4 != '') {
            localStorage.setItem('task-5', comment4)
        }
        var comment5 = $.trim($('#task-14').val());
        if (comment5 != '') {
            localStorage.setItem('task-6', comment5)
        }
        var comment6 = $.trim($('#task-15').val());
        if (comment6 != '') {
            localStorage.setItem('task-7', comment6)
        }
        var comment7 = $.trim($('#task-16').val());
        if (comment7 != '') {
            localStorage.setItem('task-8', comment7)
        }
        var comment8 = $.trim($('#task-17').val());
        if (comment8 != '') {
            localStorage.setItem('task-9', comment8)
        }
    }
    // need a function for printing after reload page
    function print() {
        $('#task-9').val(localStorage.getItem('task-1'))
        $('#task-10').val(localStorage.getItem('task-2'))
        $('#task-11').val(localStorage.getItem('task-3'))
        $('#task-12').val(localStorage.getItem('task-4'))
        $('#task-13').val(localStorage.getItem('task-5'))
        $('#task-14').val(localStorage.getItem('task-6'))
        $('#task-15').val(localStorage.getItem('task-7'))
        $('#task-16').val(localStorage.getItem('task-8'))
        $('#task-17').val(localStorage.getItem('task-9'))
    }
    // need function to clear generated keys
    function clearKeys() {
        localStorage.clear();
    }

    // function for updating page 
    function hoursUpdater() {
        print();
        var currentHour = moment().hours();
        $('.time-block').each(function () {
            // console.log('timeblock is working')// ran 9 times cause there are 9 divs with the class of "time-block"
            // console.log(this) displays 
            var blockHour = parseInt($(this).attr('id').split('-')[1]);

            // console.log(blockHour);
            if (blockHour < currentHour) {
                // console.log('Hour is past')
                $(this).addClass("past");

            } else if (blockHour > currentHour) {
                // console.log('Hour is soon')
                $(this).addClass("future");
            } else {
                // console.log('Hour is now')
                $(this).addClass("present");
            }
        })
        //need to clear keys if greater than the day is over
        if (currentHour <= 8 || currentHour >= 18) {
            clearKeys()
        }
    }

    hoursUpdater();
    var interval = setInterval(hoursUpdater, 15000);

    // dont code below this
});