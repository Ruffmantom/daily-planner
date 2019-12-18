$(document).ready(function () {
    // code below this
    var description = $('.description');
    // var time = moment().hours();
    // console.log(time);




    var saved = localStorage.getItem('savedInfo');
    console.log(saved)

    $('.saveBtn').on('click', function () {
        console.log($(this).parent().attr('id')
        )

        if (description) {
            var save = description.val();
            localStorage.setItem('savedInfo', save);
            // localStorage.setItem('savedInfo' + num, save);
        }

    })
    description.text(saved)
    // creating function to save to text area
    function print() {
        $('.row').each(function () {
            // create a variable for the id of 'this'
            console.log($(this).attr('id').split('-')[1])

            // check varible val to the saved info key in local storage
            //print the saved data
            // if there isnt data then clear 



        })
    }
    print();

    // function for updating page 

    function hoursUpdater() {
        var currentHour = moment().hours();
        $('.time-block').each(function () {
            // console.log('timeblock is working')// ran 9 times cause there are 9 divs with the class of "time-block"
            // console.log(this) displays 
            var blockHour = parseInt($(this).attr('id').split('-')[1]);

            console.log(blockHour);
            if (blockHour < currentHour) {
                console.log('block hour is before')
            } else {
                console.log('to late')
            }

        })

        console.log('did run');





    }




    // If we need to apply some CSS, we can quickly do so, using the jQuery ".attr" method.
    //  newDiv.attr("class", "fancy");
    // description.attr('class', 'past');




























    hoursUpdater();
    var interval = setInterval(hoursUpdater, 15000);

    // dont code below this
});