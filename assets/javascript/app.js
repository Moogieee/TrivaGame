$(document).ready(function() {
	$("#introSection").hide();
	$("#introSection").fadeIn(3000);
	$("endingSection").hide();
	$("#questionSection").hide();
});


// GLOBAL VARIABLES
	var timer = 30;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var timeRemaining;
	var count = 0;
	var currentQuestion = 0;

var riddles = [
	// riddle 1
	{
		"riddle": "The more you take the more you leave behind. What am I?",
		"answers": ["Footsteps", "Memories", "Farts"],
		"correctAnswer": 0 //the index of the answer
	},

	// riddle 2
	{
		"riddle": "You throw away the outside and cook the inside. Then you eat the outside and throw away the inside. What did you eat?",
		"answers": ["Pistachio Nuts", "Ear of Corn", "Potato"],
		"correctAnswer": 1
	},

	// riddle 3
	{
		"riddle": "What travels around the world but stays in one spot?",
		"answers": ["The sun", "A letter", "A stamp"],
		"correctAnswer": 2
	},

	// riddle 4
	{
		"riddle": "What's black when you get it, red when you use it, and white when you're all through with it?",
		"answers": ["Bullet", "Lobster", "Charcoal"],
		"correctAnswer": 2
	},

	// riddle 5
	{
		"riddle": "What can run but never walks, has a mouth but never talks, has a head but never weeps, and has a bed but never sleeps?",
		"answers": ["A river", "A cheetah", "A car"],
		"correctAnswer": 0
	},

	// riddle 6
	{
		"riddle": "I'm tall when I'm young and I'm short when I'm old. What am I?",
		"answers": ["A human", "A tree", "A candle"],
		"correctAnswer": 2
	},

	// riddle 7
	{
		"riddle": "What goes up but never goes down",
		"answers": ["Stairs", "Your Height", "Your age"],
		"correctAnswer": 2
	},

	// riddle 8
	{
		"riddle": "Poor people have it. Rich people need it. If you eat it you die.",
		"answers": ["Money", "Nothing", "Gold"],
		"correctAnswer": 1
	},

	// riddle 9
	{
		"riddle": "You will always find me in the past. I can be created in the present, But the future can never taint me. What am I?",
		"answers": ["History", "Memories", "Footprints"],
		"correctAnswer": 0
	},

	// riddle 10
	{
		"riddle": "What belongs to you but others use it more than you do? ",
		"answers": ["Money", "Phone number", "Name"],
		"correctAnswer": 2
	},

];

// create a runTimer that decreases every second
function runTimer() {
	intervalId = setInterval(decrementTimer, 1000);
}


// create a decrementTimer function that will display the timer on the page
function decrementTimer () {
	timer--;
	$("#timer").text("Time Remaining: " + timer);

	if (timer === 0) {
		stop();
		loss++;
	}

	if (timer <= 10) {
		// flash number red
	}
}

// stop function that stops the timer from decrementing after it reaches 0
function stop() {
	clearInterval(intervalId);

}

runTimer();



// question function
function displayQuestion() {
	$("#question").text(riddles[count].riddle);

}

// function for choices
function displayChoices() {
	 $("#buttonA").text(riddles[count].answers[0]);
	 $("#buttonB").text(riddles[count].answers[1]);
	 $("#buttonC").text(riddles[count].answers[2]);
}

$("#choices").on("click", function() {

});

// function for nextQuestion
function nextQuestion() {

}

// function for next question choices
function nextChoices(){

}

function correctAnswer() {
	correct++;
}

function wrongAnswer() {
	incorrect ++;
}

// create a function so that after you click the start button your trivia question and choices will show up.
function startTrivia() {
	$("endingSection").hide();
	$("#questionSection").show();
	$("#question").show();
	$("#choices").show();
	$("#timer").show();
	displayQuestion();
	displayChoices();
	timer = 30;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
}

// run this at the endingSection
function resetTrivia() {
	$("#endingSection").show();
	$("#questionSection").hide();
	$("#timer").hide();
	stop();

	$("#endCounter").append("<h4>Total Correct: " + correct + "<h4>");
	$("#endCounter").append("<h4>Total incorrect: " + incorrect + "<h4>");

	setTimeout(startTrivia, 3000)
}

// sets the start button at the intro screen
$("#startButton").on("click", function() {
	$("#button").hide();
	$("#subMessage").hide();
	$("#questionSection").fadeIn(2000);
	$("#endingSection").hide();
	timer = 30;

	startTrivia();
})
