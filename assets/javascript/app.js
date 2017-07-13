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

var riddles = [
	// riddle 1
	{
		"r": "The more you take the more you leave behind. What am I",
		"c": ["Footsteps", "Memories", "Farts"],
		"answer": 0 //the index of the answer
	},

	// riddle 2
	{
		"r": "You throw away the outside and cook the inside. Then you eat the outside and throw away the inside. What did you eat?",
		"c": ["Pistachio Nuts", "Ear of Corn", "Potato"],
		"answer": 1
	},

	// riddle 3
	{
		"r": "What travels around the world but stays in one spot?",
		"c": ["The sun", "A letter", "A stamp"],
		"answer": 2
	},

	// riddle 4
	{
		"r": "What's black when you get it, red when you use it, and white when you're all through with it?",
		"c": ["Bullet", "Lobster", "Charcoal"],
		"answer": 2
	},

	// riddle 5
	{
		"r": "What can run but never walks, has a mouth but never talks, has a head but never weeps, and has a bed but never sleeps?",
		"c": ["A river", "A cheetah", "A car"],
		"answer": 0
	},

	// riddle 6
	{
		"r": "I'm tall when I'm young and I'm short when I'm old. What am I?",
		"c": ["A human", "A tree", "A candle"],
		"answer": 2
	},

	// riddle 7
	{
		"r": "What goes up but never goes down",
		"c": ["Stairs", "Your Height", "Your age"],
		"answer": 2
	},

	// riddle 8
	{
		"r": "Poor people have it. Rich people need it. If you eat it you die",
		"c": ["Money", "Nothing", "Gold"],
		"answer": 1
	},

	// riddle 9
	{
		"r": "You will always find me in the past. I can be created in the present, But the future can never taint me. What am I?",
		"c": ["History", "Memories", "Footprints"],
		"answer": 0
	},

	// riddle 10
	{
		"r": "What belongs to you but others use it more than you do? ",
		"c": ["Money", "Phone number", "Name"],
		"answer": 2
	},

];


// function for timer
function timerCounter() {
	timer = setInterval(decrementTimer, 1000);
}

// function to decrease the timer
function decrementTimer() {
	timeRemaining--;
}

// timer counter on page
$("#timer").html("Time remaining: " + timeRemaining);


function displayQuestion() {
	$("#question").html(riddles[count]);
}

function nextQuestion() {
	count++
}

// create a function so that after you click the start button your trivia question and choices will show up.
function startTrivia() {
	$("endingSection").hide();
	$("#questionSection").show();
	$("#choices").show();
	$("#timer").show();
	correct = 0;
	incorrect = 0;
	unanswered = 0;
}

function resetTrivia() {
	$("#endingSection").show();
	$("#questionSection").hide();
	$("#timer").hide();

	$("#endCounter").append("<h4>Total Correct: " + correct + "<h4>");
	$("#endCounter").append("<h4>Total incorrect: " + incorrect + "<h4>");

	setTimeout(startTrivia, 1000)
}

$("#startButton").on("click", function() {
	$("#button").hide();
	$("#subMessage").hide();

	startTrivia();
})
