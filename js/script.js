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