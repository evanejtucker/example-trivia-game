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

    var quizComplete = false;


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
    };

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
    };

    function stopTimer() {
        // clears the timer
        clearInterval(intervalId);
    };

    function addQuestions() {
        for (var i=0; i<questions.length; i++) {
            // var newQuestion = $("<h4>").text(questions[i].question);
            $('.questions-box').append("<h4>" + questions[i].question + "</h4>");
            for (var k=0; k<questions[i].answers.length; k++) {
                $('.questions-box').append("<input type='radio' value='" + questions[i].answers[k] + "' name='question-" + i + "'>" + questions[i].answers[k] + "<br>");
            }
            $('.questions-box').append("<hr>");
        }
    };

    function submitGame() {
        // loop through array
        for (var i=0; i<questions.length; i++) {
            $.each($("input[name='question-"+ i +"']:checked"), function() {
                console.log($(this));
                console.log($(this).attr('value'));
                var userGuess = $(this).attr('value');
                if (userGuess === questions[i].answer) {
                    console.log('you got it right!');
                    correct++;
                } if (userGuess===null) {
                    console.log('well shit');
                } else {
                    console.log('you got it wrong');
                    incorrect++;
                }
            });
        }

        // add scores to dom, and change display state
        $('span#correct').text(correct);
        $('span#incorrect').text(incorrect);
        $('.end-screen').show(); 
    };

    // starts a new triva game, called on page load
    function newGame() {
        // clear out questions if any are there
        $('.questions-box').html("");
        // hide the scores
        $('.end-screen').hide();
        // reset variables
        correct = 0;
        incorrect = 0;
        // append questions to screen
        addQuestions();
        // start timer
        runTimer()
        // disableSubmit();
    };

    function disableSubmit() {
        $('#submit').attr("disabled", true);
    };

    function checkQuiz() {
        $.each($("input[name='question-"+ i +"']:checked"), function() {
          console.log($(this));  
        })
    };


// main process
// ---------------------------------------------------------------------->

    // start game on page load
    newGame();

    

    $('#submit').on('click', function() {
        submitGame();
    });

    $('#newGame').on('click', function() {
        newGame();
    })

});