$("ul").on("click","li",function()
{
    $(this).toggleClass('completed');
});


$('ul').on("click","span",function(event){
    // console.log('clicked on span')
    event.stopPropagation();
     $(this).parent().fadeOut(500,function()
     {
         $(this).remove();
     });
});

$("input[type='text']").keypress(function(event){
   if(event.which===13)
   {
       var todotext=$(this).val();
       $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>'+todotext+'</li>')
   }
})

$(".fa-plus-square").click(function()
{
    $("input[type='text']").fadeToggle();
})


