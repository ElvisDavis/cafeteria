//Voy a decirle a JavaScript que se ejecute una vez que el documento o DOM se haya cargado completamente
$(document).ready(function(){
    //Recorre todos los enlaces o elementos que se encuentran en la clase .menu
    $('.menu a').each(function(index, elemento){
        //Le voy a desaparecer al menu con una nueva posición vertical
        $(this).css({
            'top': '-200px'
        })

        //voy a implementar un a función para que cada uno de los elemetod del men0u aparezca con un efecto de deplazamiento
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500))//El primer elemento se va a demorar 2000ms, el segundo 2500ms y asi sucesivamente cada uno de los elementos


        //Condición para aplicar animaciones solo si el ancho de la pantalla es mayor a 800px
        if($(window).width() >800){
            //Establezco estilos iniciales del texto dentro del header
            // -Opacidad 0 (invisible)
            //-Margen superior en 0 (posición que va a tener antes de la animación)
            $('header .texto').css({
                opacity: 0,
                marginTop:0
            })


            //aplico una animación para que el texto aparezca con un efecto de desplazamiento
            $('header .texto').animate({
                //Se haga visble
                opacity: 1,
                //se desplace hacia arriba-52px
                marginTop: '-52px'
            }, 1500)//El tiempo qeu se va a demorar en aparece el texto es de 1500ms
        }



        //Scroll de los elementos del menú
        //creo una variable para cada uno de los elementos y obtengo su posición vertical
        var acercaDe=$('#acerca-de').offset().top,
            menu=$('#platillos').offset().top,
            galeria=$('#galeria').offset().top,
            ubicacion=$('#ubicacion').offset().top;
        $('#btn-acerca-de').on('click', function(e){
            e.preventDefault()//Evito el comportamiento por defecto del enlace
            $('html, body').animate({
                scrollTop: acercaDe -100 //Desplaza la posición vertical de la página a la sección scercaDe
            }, 500)//El tiempo que e demora en el desplzamiento

        })
        //repetir para cada uno de los botones

       

    })












})