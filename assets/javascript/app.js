var count = 60;

var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

$(document).ready(function() {

	$("#question-container").hide();
	$("#end-game").hide();

	$("#start-button").on("click", function() {
		$("start-container").hide();
		$("#question-container").show();
		$("#end-game").hide();

		startTimer();
		return;
	});

	function startTimer () {
		count = setInterval(timer, 1000);
	}


	function timer() {
		count--;
		$("#time-display").html(count + " Seconds");
	
		$("#done").on("click", function() {
			count = 0;

		});

		if (count == 0) {
			timeUp();
			$("#question-container").hide();
			$("start-container").hide();
			$("end-game").show();
		}

	}

	

	function timeUp () {

		var q1 = $('input:radio[name="q1"]:checked').val();
		var q2 = $('input:radio[name="q2"]:checked').val();
		var q3 = $('input:radio[name="q3"]:checked').val();
		var q4 = $('input:radio[name="q4"]:checked').val();
		var q5 = $('input:radio[name="q5"]:checked').val();
		var q6 = $('input:radio[name="q6"]:checked').val();
		var q7 = $('input:radio[name="q7"]:checked').val();
		var q8 = $('input:radio[name="q8"]:checked').val();
		var q9 = $('input:radio[name="q9"]:checked').val();
		var q10 = $('input:radio[name="q10"]:checked').val();

		//Question 1
		if (q1 == undefined) {
			unansweredCount++;
		}
		else if (q1 == "His Ear") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}

		//Question 2
		if (q2 == undefined) {
			unansweredCount++;
		}
		else if (q2 == "Gamblers Anonymous") {
			correctCount++
		}
		else {
			incorrectCount++;
		}

		//Question 3
		if (q3 == undefined) {
			unansweredCount++;
		}
		else if (q3 == "Don Eladio") {
			correctCount++
		}
		else {
			incorrectCount++;
		}

		//Question 4
		if (q4 == undefined) {
			unansweredCount++;
		}
		else if (q4 == "Gray Matter") {
			correctCount++
		}
		else {
			incorrectCount++;
		}

		//Question 5
		if (q2 == undefined) {
			unansweredCount++;
		}
		else if (q5 == "Jake") {
			correctCount++
		}
		else {
			incorrectCount++;
		}

		//Question 6
		if (q6 == undefined) {
			unansweredCount++;
		}
		else if (q6 == "Emilio") {
			correctCount++
		}
		else {
			incorrectCount++;
		}

		//Question 7
		if (q7 == undefined) {
			unansweredCount++;
		}
		else if (q7 == "Murder") {
			correctCount++
		}
		else {
			incorrectCount++;
		}

		//Question 8
		if (q8 == undefined) {
			unansweredCount++;
		}
		else if (q8 == "Furniture") {
			correctCount++
		}
		else {
			incorrectCount++;
		}

		//Question 9
		if (q9 == undefined) {
			unansweredCount++;
		}
		else if (q9 == "Icebreaker") {
			correctCount++
		}
		else {
			incorrectCount++;
		}

		//Question 10
		if (q10 == undefined) {
			unansweredCount++;
		}
		else if (q10 == "KEN WINS") {
			correctCount++
		}
		else {
			incorrectCount++;
		}


		$("#correct-answers").html(correctCount);
		$("#incorrect-answers").html(incorrectCount);
		$("unanswered").html(unansweredCount);

		$("#end-game").show();

	}
});