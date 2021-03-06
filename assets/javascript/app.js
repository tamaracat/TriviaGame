window.onload = function() {

  document.getElementById("you_won").src=images[0];
  
    
};


    var number = 75;
    var intervalId;
    var intervalIdImages;
    var win=0;
    var lose=0;
    var global_iterator=0;
    var global_stop=false;




  var images = ['assets/images/ClaudeCahun.jpg', 'assets/images/ClaudeCahun2.jpg','assets/images/AdrianPiper3.jpg',
  'assets/images/AdrianPiper2.jpg','assets/images/AdrianPiper.jpg','assets/images/JaneHawkins2.jpg',
  'assets/images/lauraAnneFry2.jpeg','assets/images/lauraAnneFry.jpeg','assets/images/MaryCassatt2.jpg','assets/images/georgia.jpeg']


  var Artists = [
  {
    name: "Georgia Okeefe",
    question: "What genre did Georgia Okeefe focus on ?",
    answer1: "Industrial",
    answer2: "Family Portraits",
    correct: "Flowers"
  },
  {
    name: "Mary Cassatt",
    question: "Which one is a title of a Mary Cassatt painting ?",
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
   
var TriviaGame = {

start: function() {

  document.getElementById("you_won").src=images[0];
   TriviaGame.iterate();

  TriviaGame.next_question_in_object();
  
},
next_question_in_object: function(){

    intervalId = setInterval(TriviaGame.decrement, 1000); 

    function select_and_display_next_question(){

      $("#question").html(Artists[global_iterator].question);

    } // end of function select_and_display_next_question

    function add_questions_to_array(){

      button_question_iterator = [];

      var number_of_questions=3;

      for(var j=0; j<=number_of_questions; j++){
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
    // end of for loop
      }
    } //end of unction add_questions_to_array

    select_and_display_next_question();

    add_questions_to_array();
   
},
decrement: function() {

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
      }

      
},
stop: function() {
    //Clears Interval with specific interval ID
    clearInterval(intervalId);
},
generate_random_number: function(){

    curr_random_number = Math.floor((Math.random() * images.length) +1);

    // console.log(curr_random_number);

  return curr_random_number;
},
checkanswer: function(){

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

      TriviaGame.next_question_in_object();
    }
    else{

      TriviaGame.tally_score();
    }
    
	
},
tally_score: function(){

  if( win > lose){

    $("#score").html("<h3>"+ "You Won!" + "</h3>");
    
    clearInterval(intervalIdImages);
    document.getElementById("you_won").src='assets/images/winner.jpeg';
    
  }
  if( win === lose){

    $("#score").html("<h3>"+ "Tied Game!" + "</h3>");
    clearInterval(intervalIdImages);

  }
  else if(win < lose){

    $("#score").html("<h3>"+ "You Lost :(" + "</h3>");
    clearInterval(intervalIdImages);
    document.getElementById("you_won").src='assets/images/lost.png';

  }
  number=0;
  // Reset display
  $("#question").html("Trivia Question");

  $("#button1").html("Answer 1");
   
  $("#button2").html("Answer 2");
       
  $("#button3").html("Answer 3");

},

new_game: function(){

 	location.reload();

 },
iterate: function(){

      var counter = 0;
      var intervalIdImages = setInterval(function(){TriviaGame.display_images(counter);counter++;
        if(counter === images.length-1) {
        counter = 0;
        }}, 2000);
      
},
display_images: function (i){

        document.getElementById("you_won").src=images[i];    
 }, 
};


 $("#start").on("click", TriviaGame.start);
 $("#reset").on("click", TriviaGame.new_game);
 $("#button1").click(TriviaGame.checkanswer);
 $("#button2").click(TriviaGame.checkanswer);
 $("#button3").click(TriviaGame.checkanswer);


  
