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
    // let currentTime = moment().format('LT');
    var currentTime = moment().hours(); // Might be easier. it puts it in military? paste the output here so I can see. 
    // ok, did you create your html page or use the one provided? there was one provided? hahah
    // haha, hang on let me check. Yeah, in the homework folder of week five it gives you HTML and CSS.$
    // Use those files it will help walk you through it. In the provided file each id of the secion is "id-*hour in military*" "id-14"
    // could be an easy way to identify which item is being clicked on.  
    // dang forsure hah yeah i made all the HTML and css already https://github.com/Ruffmantom/daily-planner
    // but sounds good ill go look through it again 
    console.log(currentTime);
    var currentTimerToString = currentTime.toString(); //making the time to a string so i can compare it to the HTML
    // console.log(currentTimerToString)
    if (userInput == currentTimerToString) { //dont know how els to think about this
        userInput.css({ 'background-color': '#FC4349' })
    }
    console.log(currentTime);
    console.log(currentTimerToString);
    console.log(inputTime.text());
    // save inputs to local storage


    //hang on while I take a look at what's going on.
    // forsure
    // This is kind of a tough one... Just read the readme for it. 

    //For the background color changing I would create some classes and then have a function
    // that adds or removes classes for the colors needed. ie: if less than current hour addclass "past" etc. 
    // ahh okay cool, and but for like getting the time to match with the inner HTML am i on the right track? 













});