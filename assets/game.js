$(document).ready(function() {

// global variables
// ---------------------------------------------------------------------->

    // array to hold all my questions
    var questions = [
        {
            question: "what is the worlds longest river",
            answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Amazon"
        },
        {
            question: "Which Country has the highest population density",
            answers: ["Macau", "Monaco", "Singapore", "HongKong"],
            answer: "Macau"
        },
        {
            question: "what is the largest dessert on Earth",
            answers: ["Sahara", "Gobi", "Arabian", "Kalahari"],
            answer: "Sahara"
        },
        {
            question: "Which of these countries does <u>NOT</u> have a Monarch",
            answers: ["Portugal", "Denmark", "Belgium", "Spain"],
            answer: "Portugal"
        },
        {
            question: "What is the world's largest lake",
            answers: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Huron"],
            answer: "Caspain Sea"
        }
    ]

    // will value of the timer
    var counter;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    var correct = 0;

    var incorrect = 0;


// functions
// ---------------------------------------------------------------------->


    function runTimer() {
        // update dom
        counter = 100;
        $('.timer').text(counter);
        // clear intervalId so timer doesnt run multiple times
        clearInterval(intervalId);
        // every 1 sec, run the decrementTimer function
        intervalId = setInterval(decrementTimer, 1000);
    }

    function decrementTimer() {
        // decrease timer by 1
        counter--;
        // if the timer is at 0, stop the timer
        if (counter === 0) {
            console.log('timer stopped');
            stopTimer();     
        }
        // update dom
        $('.timer').text(counter);
    }

    function stopTimer() {
        // clears the timer
        clearInterval(intervalId);
    }

    function addQuestions() {
        for (var i=0; i<questions.length; i++) {
            // var newQuestion = $("<h4>").text(questions[i].question);
            $('.questions-box').append("<h4>" + questions[i].question + "</h4>");
            for (var k=0; k<questions[i].answers.length; k++) {
                $('.questions-box').append("<input type='radio' value='" + questions[i].answers[k] + "' name='question-" + i + "'>" + questions[i].answers[k] + "<br>");
            }
            $('.questions-box').append("<hr>");
        }
    }

    function submitGame() {
        for (var i=0; i<questions.length; i++) {
            $.each($("input[name='question-"+ i +"']:checked"), function() {
                console.log($(this).attr('value'));

            });
        }
        
    }


// main process
// ---------------------------------------------------------------------->

    addQuestions();
    runTimer();

    $('#submit').on('click', function() {
        submitGame();
    });

});