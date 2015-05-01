(function(){
	var questionCounter = 0, //tracks question number
		selections=[],   //contains user choices
		quiz=$('#quiz'), //quiz div
		questions =[{
			question: "what is 1+1",
			choices:[1,2,3],
			answer: 2,
		}, {
			question: "what color is orange",
			choices: [blue, porange, orange],
			answer: orange,
		}];
// display next question
displayNext();

// displays next requested element
function displayNext() {
	quiz.fadeOut('slow', function() {
		$('#question').remove();

		if ( questionCounter < questions.length ) {

		}
	});
}

})();