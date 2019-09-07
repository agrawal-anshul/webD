var playing=false;
var score;
var trialsleft;
var fruit=['1','2','3','4','5','6','7','8','9'];
var step;
var action;
$(function () { 

    $("#startreset").click(function () {  
         if(playing== true){
             location.reload();
          }
          else{
            $("#gameover").hide();
              playing =true;
              score=0;
              $("#scorevalue").html(score);
            $("#trialsleft").show();
            trialsleft=3;
            addHearts();
            //change button textto reset game
           $("#startreset").html("Reset Game");

            startAction();
          }
    });


$("#fruit1").mouseover( function(){
        score++;
        $("#scorevalue").html(score);//update score
        document.getElementById("slicesound").play();//play sound
        //stop fruit going down and 
        clearInterval(action);
        //hide it
        $("#fruit1").hide("explode",500);//slice fruit
        //send new fruit

        setTimeout(startAction,501);


});



//functions






 function addHearts(){
    $("#trialsleft").empty();
    for (let i = 0; i < trialsleft; i++) {
      
        $("#trialsleft").append("<img src='images/life.png' style='margin:0 5px; width:16px; height:16px'>");
        
    }

 }
 function startAction(){
            //generate a fruit
            $("#fruit1").show();

            chooseFruit();//choose a random fruit
            //random position

            $("#fruit1").css({'left':Math.round(Math.random()*550),'top':-80});
            
                //generate random step
                step=Math.round(1+5*Math.random());

                //move fruit down one by one every 10ms
        action=setInterval(
        function(){

        $("#fruit1").css("top", $("#fruit1").position().top + step)

        //to check if fruit is too low
        if(  $("#fruit1").position().top > $("#fruitsContainer").height()  )
            {
                    //to check if trials left
                    if(trialsleft >1)
                    {   
                        //generate a fruit
                            $("#fruit1").show();
                            chooseFruit();//choose a random fruit
                        //random position
                
                            $("#fruit1").css({'left':Math.round(Math.random()*550),'top':-80});
                    
                        //generate random step
                            step=Math.round(1+5*Math.random());
                
                        //UPDATE TRIALS LEFT
                        trialsleft--;
                        addHearts();


                            
                    }
                    else
                    {
                        //gameover
                        playing=false;//not playing anymore
                        $("#startreset").html("Start Game");
                        $("#gameover").show();
                        $("#gameover").html("<p>GAME OVER!</p><p>YOUR SCORE IS: "+score+"</p>");
                        stopAction();
                        $("#trialsleft").hide();


                    }


        }



        },10);

 }
 function chooseFruit(){
     $("#fruit1").attr('src','images/'+fruit[Math.round(8*Math.random())]+'.png');
 }
 //stop dropping fruits
function stopAction()
{
    clearInterval(action);
    $("#fruit1").hide();
}

});