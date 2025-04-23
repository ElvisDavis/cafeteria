//Voy a decirle a JavaScript que se ejecute una vez que el documento o DOM se haya cargado completamente
$(document).ready(function(){
    //Recorre todos los enlaces o elementos que se encuentran en la clase .menu
    $('.menu a').each(function(index, elemento){
        //Le voy a desaparecer al menu con una nueva posición vertical
        $(this).css({
            'top': '-200px'
        })

    })












})