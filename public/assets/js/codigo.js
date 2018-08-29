/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    //$('.sidenav').sidenav();
    

    $("#bot_go_register").click(function(){
        $("#pageLogin").fadeOut(1500, function(){
            $("#pageRegister").removeClass('hide');
            $("#pageRegister").fadeIn(1500);
        });
    });

    $("#bot_go_login").click(function(){
        $("#pageRegister").fadeOut(2000, function(){
            $("#pageLogin").removeClass('invisible');
            $("#pageLogin").fadeIn(2000);
        });
    });





    $("#buscarTrabajador").click(function (){
        //alert("BubuscarTrab");
        //$("#results_div").toggleClass("hide");
        
        $("#results").html('<img class="center-align responsive-img" src="../assets/images/progress.gif">');
        
        setTimeout(function () {
            $("#results").html('');
            
            for (var i = 0, max = 4; i < max; i++) {
                
                $("#results").append('<section class="result-video">'+
                    '<div class="container py-3">'+
                        '<div class="card re-section">'+
                            '<div class="row">'+
                                '<div class="col-md-4">'+
                                    '<img class="img-responsive" src="../assets/images/perfil/'+ i +'.jpeg" alt="img"/>`'+
                                '</div>'+

                                '<div class="col-md-8 px-3">'+
                                    '<div class="card-block px-3">'+
                                        '<h5 class="card-title">Nombre del trabajador</h5>'+
                                        '<h6 class="card-subtitle mb-2 text-muted">Servicio ofrecido</h6>'+
                                        '<p class="card-text text-truncate"> Descripción del trabajador</p>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</section>');
            }
        }, 1600);
    });
    
    
  });