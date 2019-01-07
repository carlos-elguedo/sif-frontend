/**
 * Este archivo es el encargado de establecer los textos en la aplicacion con el idioma previamente establecido
 * El objeto MyLove, es el que contiene los texto de la app
 * Este objeto maneja los diferentes textos como sus propiedades
 */
var MyLove = new Array();

    //Definimos las propiedades del objeto idioma
    MyLove.titulo = "";

    MyLove.barra_lateral_opcion1 = "";
    MyLove.barra_lateral_opcion2 = "";
    MyLove.barra_lateral_opcion3 = "";
    MyLove.barra_lateral_opcion4 = "";

    MyLove.opc_config_titulo = "";
    MyLove.opc_config_opc_1 = "";
    MyLove.opc_config_opc_2 = "";
    MyLove.opc_config_opc_3 = "";

    MyLove.mensaje_texto = "";
    
    MyLove.enviar_solicitud_titulo = "";
    MyLove.enviar_solicitud_descripcion = "";
    MyLove.enviar_solicitud_opcion1 = "";
    MyLove.enviar_solicitud_opcion2 = "";
    MyLove.enviar_solicitud_opcion3 = "";
    MyLove.enviar_solicitud_cancelar = "";
    MyLove.enviar_solicitud = "";
    

/**
 * Esta funcion da el idioma a la variable MyLove que manejara y establecera los textos de la aplicacion llamando a otra funcion
 * recibe el idioma a establecer
 */

function establecerIdioma(idioma){
    //Aqui manejamos el idioma recibido para instanciar las propiedades de la variable que contiene los texts de la app
    switch(idioma){
        //En caso de que el idioma recibido por esta funcion sea es, español, se instancian las variables con el texto en español
        case "es":
            MyLove.titulo = "Chat";
            
            MyLove.barra_lateral_opcion1 = "Mylove";
            MyLove.barra_lateral_opcion2 = "Perfil";
            MyLove.barra_lateral_opcion3 = "Configuraciones";
            MyLove.barra_lateral_opcion4 = "Acerca de Mylove";

            MyLove.opc_cuenta_opc_1 = "Tu nombre:";

            MyLove.opc_config_titulo = "Configura tu aplicación";
            MyLove.opc_config_opc_1 = "Color";
            MyLove.opc_config_opc_2 = "Imagen de fondo";
            MyLove.opc_config_opc_3 = "Fuente";

            MyLove.mensaje_texto = "...";
            
            MyLove.enviar_solicitud_titulo = "Enviar una solicitud";
            MyLove.enviar_solicitud_descripcion = "Si la persona que quieres contactar usa MyLove, escoge el telefono o correo de ese usuario";
            MyLove.enviar_solicitud_opcion1 = "Correo electrocico";
            MyLove.enviar_solicitud_opcion2 = "Numero telefonico";
            MyLove.enviar_solicitud_opcion3 = "Codigo";
            MyLove.enviar_solicitud_cancelar = "Cancelar";
            MyLove.enviar_solicitud = "Enviar";

            //Se llama a esta funcion para que establesca los textos de la app
            establecerTextos();
            break;

        //En caso de que el idioma recibido por esta funcion sea en, ingles, se instancian las variables con el texto en ingles
        case "en":
            MyLove.titulo = "My Love";   
            
            MyLove.barra_lateral_opcion1 = "Your perfil";
            MyLove.barra_lateral_opcion2 = "Optión 2";
            MyLove.barra_lateral_opcion3 = "Set up";
            MyLove.barra_lateral_opcion4 = "About MyLove";

            MyLove.mensaje_texto = "...";
            
            MyLove.enviar_solicitud_titulo = "Send a request";
            MyLove.enviar_solicitud_descripcion = "If the user you want send request used MyLove, chosen his bind date: email, number phone or code";
            MyLove.enviar_solicitud_opcion1 = "Email";
            MyLove.enviar_solicitud_opcion2 = "Nomber phone";
            MyLove.enviar_solicitud_opcion3 = "Code";
            MyLove.enviar_solicitud_cancelar = "Cancel";
            MyLove.enviar_solicitud = "Send";

            //Se llama a esta funcion para que establesca los textos de la app
            establecerTextos();
            break;
        //En caso de que el idioma recibido sea distintos a las opciones del switch, se establecera el idioma ingles como por defecto de
        //la aplicacion, esto para hacerla universal
        default:
            MyLove.titulo = "My Love";

            MyLove.barra_lateral_opcion1 = "Your perfil";
            MyLove.barra_lateral_opcion2 = "Optión 2";
            MyLove.barra_lateral_opcion3 = "Set up";
            MyLove.barra_lateral_opcion4 = "About MyLove";

            MyLove.mensaje_texto = "...";

            MyLove.enviar_solicitud_titulo = "Send a request";
            MyLove.enviar_solicitud_descripcion = "If the user you want send request used MyLove, chosen his bind date: email, number phone or code";
            MyLove.enviar_solicitud_opcion1 = "Email";
            MyLove.enviar_solicitud_opcion2 = "Nomber phone";
            MyLove.enviar_solicitud_opcion3 = "Code";
            MyLove.enviar_solicitud_cancelar = "Cancel";
            MyLove.enviar_solicitud = "Send";
            
            //Se llama a esta funcion para que establesca los textos de la app
            establecerTextos();
            break;
    }
}//Fin de la funcion establecerIdioma

/**
 * Esta funcion establece los texto en la app, con ayuda de la variable MyLove previamente establecida
 */
function establecerTextos(){
    //Empezamos a establecer el idioma en los elementos de la aplicación
    
    //Para el titulo de la pagina
    document.getElementById("titulo-pagina").innerHTML = MyLove.titulo;

    //Para la barra lateral
	document.getElementById("barra-opc-1").innerHTML = MyLove.barra_lateral_opcion1;
	document.getElementById("barra-opc-2").innerHTML = MyLove.barra_lateral_opcion2;
	document.getElementById("barra-opc-3").innerHTML = MyLove.barra_lateral_opcion3;
	document.getElementById("barra-opc-4").innerHTML = MyLove.barra_lateral_opcion4;
        
        document.getElementById("lab-solicitud-titulo").innerHTML = MyLove.enviar_solicitud_titulo;
        document.getElementById("lab-solicitud-descripcion").innerHTML = MyLove.enviar_solicitud_descripcion;
        document.getElementById("envsolval1").innerHTML = MyLove.enviar_solicitud_opcion1;
        document.getElementById("envsolval2").innerHTML = MyLove.enviar_solicitud_opcion2;
        document.getElementById("envsolval3").innerHTML = MyLove.enviar_solicitud_opcion3;
        document.getElementById("envsolbotcancel").innerHTML = MyLove.enviar_solicitud_cancelar;
        document.getElementById("envsolbotenviar").innerHTML = MyLove.enviar_solicitud;
        

	document.getElementById("area_de_texto").innerHTML = MyLove.mensaje_texto;

    
}//Fin de la fincion establecerTextos