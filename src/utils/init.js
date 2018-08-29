


function isLogged(){
    
    //alert("Va a buscar");
    //console.log("Llegooooooooooooooooooooooooooo");
    var totalStorage = localStorage.length;
    var ret = false;

    if(totalStorage >= 1){
        //localStorage.setItem("user", "carlos elguedo");
        //localStorage.setItem("pass", "123123");
        for(var f = 0; f < localStorage.length; f++){
            var key = localStorage.key(f);
            var val = localStorage.getItem(key);
            //alert(clave + "-<->-" + valor);
            if(key === "sav" && val === "1"){
                //Estan guardados los datos
                
                var email_user = "", pass_user = "";
                //Se recorre nuevamente el localStore para saver identificar los datos del usuario
                for(var i = 0; i<localStorage.length; i++){
                    var key_2 = localStorage.key(i);
                    var val_2 = localStorage.getItem(key_2);
                    if(key_2 === "user"){email_user = val_2;}
                    if(key_2 === "pass"){pass_user = val_2;}
                }

                //console.log("Va a pedir");
                fetch('http://localhost:3001/api/rest/login',{
                    method: 'POST',
                    body: JSON.stringify({"user":email_user, "password": pass_user}),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data.status);
                    console.log("Va a retornar: tru");
                    return true;
                    //M.toast({html: data.message});
                    
                })
                .catch(err => console.error("-------------------" + err));
                
                
            }
            
        }//fin del For
    }else{
        //alert("No hay nada");
        console.log("No hay nada guardado");
        localStorage.setItem("sav", "0");
        console.log("Va a retornar: false");
        return false;
    }

    
    return true;
}



module.exports = {isLogged};