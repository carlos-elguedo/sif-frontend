import React, { Component } from 'react';


class Client extends Component {
    render() {
      return (
        <div className="App">
            
            {/*
            <nav className="navbar navbar-light bg-primary">
                <div className="navbar-brand text-white" href="">
                    <img src="assets/images/SIF.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                     Nombre de usuario
                </div>
            </nav>
            */}

            <nav role="navigation" className="navbar navbar-default bg-primary"> 
  
                <div className="navbar-header"> 
                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle"> 
                        <span className="sr-only">Toggle navigation</span> 
                        <span className="icon-bar"></span> 
                        <span className="icon-bar"></span> 
                        <span className="icon-bar"></span> 
                    </button> 
                    <a href="#" className="navbar-brand text-white">Nombre del usuario</a> 
                </div> 
                
                <div id="navbarCollapse" className="collapse navbar-collapse"> 
                    <ul className="nav navbar-nav"> 
                        <li className="active"><a href="#">Home</a></li> 
                        <li><a href="#">Profile</a></li> 
                        <li><a href="#">Messages</a></li> 
                    </ul> 
                    
                    <ul className="nav navbar-nav navbar-right"> 
                        <li><a href="#">Login</a></li> 
                    </ul> 
                </div> 
            </nav> 
            

            <div className="container">
                
                <div className="row">
                
                    <div className="col-lg-12 search-bar p-t-20">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Escribe aquí el servicio que estas buscando"/>
                            <span className="input-group-btn">
                                <button id="buscarTrabajador" className="btn btn-primary" type="button">Buscar</button>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-6">
						<select id="tipo_de_busqueda" className="form-control">
                    		<option>Palabra clave</option>
                    		<option>Categorias</option>
                  		</select>
					</div>

                </div>

                <div id="results_div" className="row p-t-20">
                        
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-title re-card-header">
                                    Resultados de la busqueda
                                </div>
                                <div id="results" className="card-body">
                                    
                                </div>
                            </div>
                        </div>

                </div>

                
            </div>
        </div>
      );
    }
  }
  
  export default Client;
  