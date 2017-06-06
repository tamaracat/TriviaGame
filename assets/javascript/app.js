

    var number = 50;
    var intervalId;
    var global_random=0;
    var win=0;
    var lose=0;
    var global_iterator=0;
    var global_stop=false;

    var Random_Number_Array = [];

  var Artists = [
  {
    name: "Georgia Okeefe",
    question: "What genre did Georgia Okeefe focus on ?",
    answer1: "Industrial",
    answer2: "Family Portraits",
    correct: "Flowers"
  },
  {
    name: "Mary Cassatte",
    question: "Which one is a title of a Mary Cassatte painting ?",
    answer1: "Winter Time",
    answer2: "The Boating Trip",
    correct: "Summertime"
  },
  {
    name: "Laura Ann Fry",
    question: "Which subject matter did Laura Ann Fry focus on?",
    answer1: "Charcoal Renderings",
    answer2: "Family Portraits",
    correct: "Flower Paintings"
  },
  {
    name: "Jane Hawkins",
    question: "What genre did Jane Hawkins focus on?",
    answer1: "Charcoal Renderings",
    answer2: "Flowers",
    correct: "Family Portraits"
  },
  {
    name: "Adrian Piper",
    question: "What kind of art did Adrian Piper create?",
    answer1: "Oil Painter",
    answer2: "Sculpter",
    correct: "Performance Artist"
    
  },
  {
    name: "Claude Cahun",
    question: "What is a fact about Claude Cahun?",
    answer1: "She portrayed herself in no clothes",
    answer2: "She was Canadian",
    correct: "She portrayed herself in mens clothes"
    
  },
  ];
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    

function start() {

  next_question_in_object();
  
}

function next_question_in_object(){

    intervalId = setInterval(decrement, 1000); 

    select_and_display_next_question();

    add_questions_to_array();
   
}
    //  The decrement function.
function decrement() {

      //  Decrease number by one.
      number--;

      if (number > -1){

      //  Show the number in the #show-number tag.
      	$("#div_time_left").html("<h3>" + number + "</h3>");

      }
      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        // alert("Your Time is Up!");
      }

      
}

    //  The stop function
function stop() {


    clearInterval(intervalId);
}

function generate_random_number_for_answers(){

		curr_random_number = Math.floor((Math.random() * 3) +2);

		// console.log(curr_random_number);

	return curr_random_number;
}

function select_and_display_next_question(){


 	$("#question").html(Artists[global_iterator].question);


}
 
function add_questions_to_array(){

 	need_button_questions = [];

  var number_of_questions=3;

 	var new_random_number = generate_random_number_for_answers();

 	for(var j=0; j<=number_of_questions; j++){

 		if( new_random_number !== need_button_questions[j]){

 				need_button_questions[j] = new_random_number;

 				// console.log(need_button_questions[j]);
 				if( j === 1){
 					$("#button1").html(Artists[global_iterator].answer1);
 				}
 				if( j === 2){
 					$("#button2").html(Artists[global_iterator].answer2);
 				}
 				else if(j ===3){
 					$("#button3").html(Artists[global_iterator].correct);
 				}
 			// end if if statement
 			}
// end of for loop
  }
 	
 }
function checkanswer(){

  var answer = ($(this).html());

   if( answer === Artists[global_iterator].correct ){

      // alert("You Win!");
      win++;
     
        $("#score").html("<h3>" + "Correct!" + "</h3>");
     
    } 
    else{
      // alert("You Lose!");
      lose++
      
        $("#score").html("<h3>"+ "Wrong :(" + "</h3>");
     
    }
    global_iterator +=1;

    if( global_iterator < Artists.length ){

      next_question_in_object();
    }
    else{

      tally_score();
    }
    
	
}
function tally_score(){

  if( win > lose){

    $("#score").html("<h3>"+ "You Won!" + "</h3>");

  }
  if( win === lose){

    $("#score").html("<h3>"+ "Tied Game!" + "</h3>");

  }
  else if(win < lose){

    $("#score").html("<h3>"+ "You Lost :(" + "</h3>");

  }

}
function new_game(){

 	location.reload();

 }

 $("#start").on("click", start);
 $("#reset").on("click", new_game);
 $("#button1").click(checkanswer);
 $("#button2").click(checkanswer);
 $("#button3").click(checkanswer);

  
 
 
    //  Execute the run function.
    // start();