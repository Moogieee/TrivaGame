$(document).ready(function() {
	$("#introSection").hide();
	$("#introSection").fadeIn(3000);
	$("#endingSection").hide();
	$("#questionSection").hide();
});


//  VARIABLES
	var timer = 31;
	var correct = 0;
	var incorrect = 0;
	var timeRemaining;
	var count = 0;
	var currentQuestion = 0;

var riddles = [
	// riddle 1
	{
		"question": "The more you take the more you leave behind. What am I?",
		"answers": ["Footsteps", "Memories", "Farts"],
		"correctAnswer": 0 //the index of the answer
	},

	// riddle 2
	{
		"question": "You throw away the outside and cook the inside. Then you eat the outside and throw away the inside. What did you eat?",
		"answers": ["Pistachio Nuts", "Ear of Corn", "Potato"],
		"correctAnswer": 1
	},

	// riddle 3
	{
		"question": "What travels around the world but stays in one spot?",
		"answers": ["The sun", "A letter", "A stamp"],
		"correctAnswer": 2
	},

	// riddle 4
	{
		"question": "What's black when you get it, red when you use it, and white when you're all through with it?",
		"answers": ["Bullet", "Lobster", "Charcoal"],
		"correctAnswer": 2
	},

	// riddle 5
	{
		"question": "What can run but never walks, has a mouth but never talks, has a head but never weeps, and has a bed but never sleeps?",
		"answers": ["A river", "A cheetah", "A car"],
		"correctAnswer": 0
	},

	// riddle 6
	{
		"question": "I'm tall when I'm young and I'm short when I'm old. What am I?",
		"answers": ["A human", "A tree", "A candle"],
		"correctAnswer": 2
	},

	// riddle 7
	{
		"question": "What goes up but never goes down",
		"answers": ["Stairs", "Your Height", "Your age"],
		"correctAnswer": 2
	},

	// riddle 8
	{
		"question": "Poor people have it. Rich people need it. If you eat it you die.",
		"answers": ["Money", "Nothing", "Gold"],
		"correctAnswer": 1
	},

	// riddle 9
	{
		"question": "You will always find me in the past. I can be created in the present, But the future can never taint me. What am I?",
		"answers": ["History", "Memories", "Footprints"],
		"correctAnswer": 0
	},

	// riddle 10
	{
		"question": "What belongs to you but others use it more than you do? ",
		"answers": ["Money", "Phone number", "Name"],
		"correctAnswer": 2
	},

];

var introScreen = function() {
	$("#introSection").hide();
	$("#introSection").fadeIn(2000);
	$("#endingSection").hide();
	$("#questionSection").hide();

}

// create a runTimer that decreases every second
function runTimer() {
	intervalId = setInterval(decrementTimer, 1000);
}


// create a decrementTimer function that will display the timer on the page
function decrementTimer() {
	timer--;
	$("#timer").text("Time Remaining: " + timer);

	if (timer === 0) {
		stop();
		count++;
		displayQuestionSection();
		runTimer();
		$("#timer").css('color', 'black');
		incorrect++;
	}

	if (timer <= 10) {
		$("#timer").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
		$("#timer").css('color', 'red');
	}
}

// stop function that stops the timer from decrementing after it reaches 0
function stop() {
	clearInterval(intervalId);

}

// I forgot why I put this here... like why is this here in this specific area? It works so I'm not touching it...
runTimer();



// question function
function displayQuestionSection() {
	timer = 31;
	$("#question").text(riddles[count].question);
	$("#buttonA").text(riddles[count].answers[0]);
	$("#buttonB").text(riddles[count].answers[1]);
	$("#buttonC").text(riddles[count].answers[2]);
}


// create a function so that after you click the start button your trivia question and choices will show up.
function startTrivia() {
	$("endingSection").hide();
	$("#questionSection").fadeIn(3000);
	$("#question").fadeIn(3000);
	$("#choices").fadeIn(3000);
	$("#timer").fadeIn(3000);
	displayQuestionSection();
	timer = 31;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
}

// run this at the endingSection
function endTrivia() {
	$("#endingSection").fadeIn(2000);
	$("#questionSection").hide();
	$("#endCounter").append("<h4>Total Correct: " + correct + "<h4>");
	$("#endCounter").append("<h4>Total incorrect: " + incorrect + "<h4>");
	stop();
}

// sets the start button at the intro screen
$("#startButton").on("click", function() {
	$("#button").hide();
	$("#subMessage").hide();
	$("#questionSection").fadeIn(2000);
	$("#endingSection").hide();
	timer = 31;

	startTrivia();
});

// restart
$("#restartButton").on("click", function() {
	correct = 0;
	incorrect = 0;
	count = 0;
	$("#endCounter").empty();
	$("#endingSection").hide();
	startTrivia();

})

// answer choices buttons function
$(".choiceButton").on("click", function() {
	if(this.id == "buttonA") {
		var answerChosen = 0;
	} else if (this.id == "buttonB") {
		var answerChosen = 1;
	} else if (this.id == "buttonC") {
		var answerChosen = 2;
	}

	if ((answerChosen === 0) && (riddles[count].correctAnswer === 0)) {
		correct++;
		console.log("right");
	} else if ((answerChosen === 1) && (riddles[count].correctAnswer === 1)) {
		correct++;
		console.log("correct");
	} else 	if ((answerChosen === 2) && (riddles[count].correctAnswer === 2)) {
		correct++
		console.log("YAY");
	} else {
		incorrect++
		console.log("wrong")
	}

// keep displaying questions until the last question is answered. Then show the end page.
	count++;
	if (count < riddles.length) {
	 	displayQuestionSection();
	 } else {
	 	endTrivia();
	 }


});
