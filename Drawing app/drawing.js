$(function(){
    $('#slider').slider({
        min:3,
        max:30,
        slide: function(event,ui){
            $('#circle').height(ui.value);
            $('#circle').width(ui.value);

        }
    });
 
//-------------------CAVNVAS TUTORIALS----------- 
    // var canvas=document.getElementById("paint");
    // var context= canvas.getContext('2d');
    
    // context.beginPath();    
    // context.lineWidth=10;
    // context.strokeStyle='blue';
    // //set line cap to butt, round or square
    // context.lineCap='butt';
    // //set line joint style to bevel,round,miter
    // context.lineJoin="bevel";


    // context.moveTo(50,50);
    // context.lineTo(80,80);
    // context.lineTo(100,30);


    // context.stroke();

//--------------------------------------------------

    //declare variables
        var paint=false;//paintingerasing or not ,if true then only painting or erasing.
        var paint_erase='paint'//painting orn erasing
        //get the canvas and context
        var canvas=document.getElementById('paint');
        var ctx=canvas.getContext("2d");
        
        var container=$('#container');//get the canvas container
        var mouse={x:0, y:0}; //mouse position
    
    
    //onload load saved work from localStrorage.


    //set drawing parameters(linewidths.lineJoin ,line cap)
    ctx.lineWidth=1;
    ctx.lineJoin="round";
    ctx.linCap="round";
    
    //click inside the container
    container.mousedown(function(event){
        paint=true;
        //window.alert(paint);
        ctx.beginPath();
        mouse.x=event.pageX - this.offsetLeft;
        mouse.y=event.pageY - this.offsetTop;

        ctx.moveTo(mouse.x,mouse.y);
    });
    
    //move the mouse while holding mouse key
    container.mousemove(function(event){
        mouse.x=event.pageX - this.offsetLeft;
        mouse.y=event.pageY - this.offsetTop;
        console.log(mouse.x);
    console.log(mouse.y);
        // console.log(event);
        if(paint==true){
            if (paint_erase == 'paint'){
                //get color input
                ctx.strokstyle='red';
            }else{
                //white colour
                ctx.strokstyle='white';
            }
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
        }
        
    });
    
    //mouse up-->we r not paintaing erasing anymore
    container.mouseup(function(){
        paint=false;
    });

    // if we leave the container we r not paintingerasing anymore
    container.mouseleave(function(){
        paint=false;
    });
    // click on the reset button
    // click on save button
    //click on the erase button
    $("#erase").click(function(){
        if(paint_erase == "paint"){
            paint_erase='erase';
        
        }else{
            paint_erase="paint";
        }
        $(this).toggleClass("eraseMode");


    });





});
