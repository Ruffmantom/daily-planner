$(document).ready(function () {
    // need variables for connecting
    var date = $('#date');
    var inputTime = $('.hour');
    var userInput = $('.user-input');
    var save = $('.save-btn');

    // need date in the left hand corner
    date.text('Today is ' + moment().format('ll'));

    // when cliked on save button i want the icon to change to the lock icon <i class="fas fa-lock"></i>
    save.on('click', function () {



    })
    //set up time (moment JS)for blocks to be greyed out meaning past time, and for diplaying the current time of the day.
    let currentTime = moment().format('LT');
    var currentTimerToString = currentTime.toString();
    // console.log(currentTimerToString)
    if (userInput == currentTimerToString) {
        userInput.css({ 'background-color': '#FC4349' })
    }
    console.log(currentTime);
    console.log(currentTimerToString);
    console.log(inputTime.text());
    // save inputs to local storage

















});