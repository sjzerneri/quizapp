$(document).ready(function () {

    /*---Set Global Variables---*/

    /*--- Questions Variable ---*/
    var questions = [
        //Question 1
        {
            question: 'What college did Tom Brady Attend?',
            choices: ['University of Michigan', 'Boston College', 'Ohio State University', 'University of Oklahoma'],
            correct: 0,
            correctDetails: 'Brady graduated in 2002.'
        },
        //Question 2
        {
            question: 'Who won the Superbowl in 2015?',
            choices: ['Chicago Bears', 'New England Patriots', 'Minnesota Vikings', 'Jacksonville Jaguars'],
            correct: 1,
            correctDetails: 'The Patriots defeated the Seahawks in the 2015 Super Bowl.'
        },
        //Question 3
        {
            question: 'Who is the Seattle Seahawks Quarterback?',
            choices: ['Ryan Leaf', 'Jay Cutler', 'Russell Wilson', 'Tarvaris Jackson'],
            correct: 2,
            correctDetails: 'Russell Wilson is the Seattle Seahawks QB.'
        },
        //Question 4
        {
            question: 'Who is the NFL Commissioner?',
            choices: ['Robert Kraft', 'Roger Goodell', 'Jeff Joyce', 'Woody Johnson'],
            correct: 1,
            correctDetails: 'Roger Goodell is the NFL Commissioner.'
        },
        //Question 5
        {
            question: 'Who is the coach of the Buffalo Bills?',
            choices: ['Rex Ryan', 'Bill Belicheck', 'Mike Ditka', 'Jay Gruden'],
            correct: 0,
            correctDetails: 'Rex Ryan took over the coaching job for the Buffalo Bills after leaving the New York Jets.'
        },
    ];

    //Total questions variable
    var totalQuestions = questions.length;

    //Question number variable

    var questionNumber = 0;

    //Correctly answered questions variable

    var correctAnswers = 0;

    $('.start-section').show();

    //when start quiz button is clicked, load the questions section
    $('#startQuizButton').click(function () {
        $('.start-section').hide();
        $('.results-section').hide();
        $('.questions-section').show();
        questionView();
    });

    $('.questions-section').on('click', '.option', function () {

        var answer = $("input[class='option']:checked").val();
        var correctAnswer = questions[questionNumber].correct;
        if (answer == correctAnswer) {
            //add to correct answer total
            correctAnswers++;
        }

        $('.qna').append("<h3>Question:  " + questions[questionNumber].question + "</h3>");
        $('.qna').append("<h4>Answer:  " + questions[questionNumber].correctDetails + "</h4>");

        //if the quiz has no more questions to show
        if (questionNumber + 1 == totalQuestions) {
            $('.questions-section').hide();
            $('.results-section').show();
            $('#finalScore').text(correctAnswers + "/" + totalQuestions);
        } else {
            //continue the quiz
            questionNumber++;
            questionView();
        }
    });

    function questionView() {
        //show the current question
        $('#question-text').text(questions[questionNumber].question);
        $('#question-num').text("Question " + (questionNumber + 1) + " of " + totalQuestions);
        $('#choices').empty();
        var choiceTotal = questions[questionNumber].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            //show the answer choices
            $('#choices').append("<li><input type='radio' class='option' name='option' value=" + i + ">" + " " + questions[questionNumber].choices[i] + "<br></li>");
        }
    };

    //when start quiz button is clicked, load the questions section
    $('#retakeQuizButton').click(function () {
        $('.quiz-section').hide();
        $('.results-section').hide();
        $('.start-section').show();
        questionView();
    });
});
