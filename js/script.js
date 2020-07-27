$(document).ready(function(){
    $('.clickable').click(function() {
        $('#design').toggle();
        $('#icon').toggle();
        
    });
    $('.dev').click(function() {
        $('#dev_icon').toggle()
        $('#development').toggle()
        
    });
    $('.management').click(function() {
        $('#prod-icon').toggle()
        $('#product').toggle()   
    });

   
});

// portfolio functions
$(document).ready(function(){
    $('#portfolio').hover(function(){
        $('.overlay', this).slideToggle(slow);
        $('.overlay', this).slidetoggle(slow)
    });
});



// contact us
$(document).ready(function(){
    $('#contact form').submit(function(event){
        var contact = ['name','email','message']
    })
})