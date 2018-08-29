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
        $("#results_div").toggleClass("hide");
        
        $("#results").html('<img class="center-align responsive-img" src="../assets/images/progress.gif">');
        
        setTimeout(function () {
            $("#results").html('');
            
            for (var i = 0, max = 4; i < max; i++) {
                $("#results").append('<div class="col s12 m6 l3">'+
                        '<div class="card">'+
                        '<div class="card-image">'+
                            '<img  class="img_result" src="../assets/images/perfil/'+ i +'.jpeg">'+
                            '<span class="card-title">'+ i +'</span>'+
                        '</div>'+
                        '<div class="card-content">'+
                            '<p>Nombre del trabajador '+ i +'</p>'+
                        '</div>'+
                        '<div class="card-action">'+
                            '<a href="#">Ver perfil</a>'+
                        '</div>'+
                        '</div>'+
                    '</div>');
            }
        }, 1000);
    });
    
    
  });