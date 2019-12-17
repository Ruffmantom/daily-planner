$(document).ready(function () {
    // code below this
    var description = $('.description');
    var time = moment().hours();
    console.log(time);




    var saved = localStorage.getItem('savedInfo');
    console.log(saved)

    $('.saveBtn').on('click', function () {
        console.log('working')
        if (description) {
            var save = description.val();
            localStorage.setItem('savedInfo', save);
        }



    })
    description.text(saved)
    // If we need to apply some CSS, we can quickly do so, using the jQuery ".attr" method.
    //  newDiv.attr("class", "fancy");































    // dont code below this
});