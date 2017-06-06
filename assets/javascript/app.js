

    var number = 50;
    var intervalId;
    var global_random=0;
    var win=0;
    var lose=0;

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
  }
  ];
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    

    function start() {


    	var random_number = generate_random_number();

      while ( Random_Number_Array.length < 4){

        console.log(Random_Number_Array.length);

        if(Random_Number_Array.find(Load_Random_Array)){
      
        var random_number = generate_random_number();

        Random_Number_Array.push(random_number);

        global_random = random_number;

        console.log(Random_Number_Array.length);
        }
        else{

          Random_Number_Array.push(random_number);

        global_random = random_number;

        
        new_game();

        }
      }
        global_random = random_number;

        Random_Number_Array.push(global_random);

        Load_Random_Array(global_random);

 		     select_and_display_random_question(global_random);

 		     add_questions_to_array(global_random);

          intervalId = setInterval(decrement, 1000); 
      
   
    return random_number;
        

    }
    function Load_Random_Array(random_number){

      return random_number;

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
        alert("Your Time is Up!");
      }
    }

    //  The stop function
    function stop() {

      clearInterval(intervalId);
    }
function generate_random_number(){


	var random_number = Math.floor((Math.random() * 4 ) +1);

	return random_number;
}
function generate_random_number_for_answers(){

		curr_random_number = Math.floor((Math.random() * 3) +2);

		console.log(curr_random_number);

	return curr_random_number;
}

function select_and_display_random_question(random_number){

 	$("#question").html(Artists[random_number].question);

 	console.log(Artists[random_number].question);

}

function display_questions(random_number){

 	$("#button1").html(Artists[random_number].question);

 	console.log(Artists[random_number].question);

}
 
 function add_questions_to_array(curr_random_number){

 	need_button_questions = [];

 	for(var i=0; i<4; i++){
 	
 		var new_random_number = generate_random_number_for_answers();
 		for(var j=0; j<4; j++){
 			if( new_random_number !== need_button_questions[j]){

 				need_button_questions[j] = new_random_number;

 				console.log(need_button_questions[j]);
 				if( j === 1){
 					$("#button1").html(Artists[curr_random_number].answer1);
 				}
 				if( j === 2){
 					$("#button2").html(Artists[curr_random_number].answer2);
 				}
 				else if(j ===3){
 					$("#button3").html(Artists[curr_random_number].correct);
 				}
 				
 			}

 			console.log(Artists[curr_random_number].answer1);

  		}
 
 	}
 	
 }
function checkanswer(){

  var answer = ($(this).html());

  console.log(Artists[global_random].correct);

   if( answer === Artists[global_random].correct ){

      alert("You Win!");
      stop();
      win++;
    } 
    else{
      alert("You Lose!");
      stop();
      lose++
    }

    start();
	
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