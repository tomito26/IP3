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
    $('.img1').mouseover(function(){
        $('.project_1').show();
    });
    $('.img1').mouseout(function(){
        $('.project_1').hide();
    });
    
    

});