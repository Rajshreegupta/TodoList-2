// Marking todo as completed
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed')
})

// Add new todo

$('input[type="text"]').keypress(function(e){
    if(e.which===13){
        const todoText = $(this).val()
        $('ul').append(`<li><span><i class="fas fa-trash"></i> </span>${todoText}</li>`);
        $(this).val("")
    }
})

// Remove todo item

$('ul').on('click', 'span', function(){
    $(this).parent().remove()
})

$('#plus').click(function(){
    $('input[type="text').fadeToggle(500)
})