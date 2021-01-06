animacion = function(){
    var day = dia();
    document.getElementById(day).classList.toggle('fade');
}
setInterval(animacion, 1500);

function dia(){
    var d = new Date();
    var n = d.getDay();
    var dia;
    switch(n){
    
        case 1:
            dia = "lun";
            break;
        case 2:
            dia = "mar";
            break;
        case 3:
            dia = "mier";
            break;
        case 4:
            dia = "jue";
            break;
        case 5:
            dia = "vie";
            break;
    }
    return dia;
}











/*$(document).ready(function(){
    $("#btn-clic").click(function(){
        $('#ventana-modal').modal('show');
    })
})

function myFunction(x){
    if(x == 'FTPI'){
        $(function(event){
            //$('#ventana-modal').modal('show');
            $(modal.find('.modal-title').text(x))
           // modal.find('.modal-body')
        })
    }else{
        alert("No es FTPI");
    }
    
}*/



/*(function(){

$(function(){

    $('#btn-clic').on('click', function(){
        $('#ventana-modal').modal();
    })
})
}    
)*/

/*(function(){
    $(function(){
        //$('#ventana-modal').modal();
        $('#ventana-modal').modal();
    })
})*/