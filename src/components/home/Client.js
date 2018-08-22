import React, { Component } from 'react';


class Client extends Component {
    render() {
      return (
        <div>
          <nav className="navbar">
            <div className="nav-wrapper orange">
                
                <i className="left material-icons">menu</i>
                
                <a href="#" className="brand-logo">Esteban Torres</a>

                <i className="right material-icons">user</i>
            </div>
          </nav>

          <div className="container">
            
            <div className="row">
                <div className="col s12 m12">
                    <div className="card hoverable">
                        <div className="card-content">
                            <div className="input-field">
                                <input type="text" placeholder="Empieza a buscar trabajadores"/>
                            </div>
                            <div className="input-field">
                                <select>
                                    <option>Buscar por palabra</option>
                                    <option>Buscar por categoria</option>
                                </select>
                            </div>
                            
                        </div>
                        <div className="card-action">
                            <a id="buscarTrabajador" className="waves-effect waves-light">Buscar</a>
                        </div>
                    </div>
                </div> {/*<!-- Fin de la columna principal del panel de busqueda -->*/}
            </div> {/*<!--Fin de la fila del panel de busqueda*/}
                   
            
            
                   
                   
                   
                   
                   
                   
                   
                   
            {/*<!-- RESULTADOS DE BUSQUEDA -->*/}
            <div id="results_div" className="row  hide">
                <p><b>Resultados de busqueda</b></p>
                <div id="results" className="col s12 m12">
                    
                </div> {/* <!-- Fin de la columna principal del panel de resultados busqueda -->*/}
            </div> {/*<!--Fin de la fila del panel de resultados busqueda*/}
                    
 
                   
                   
                   
                   
                   
                   
                   
                   
            
            {/*<!-- ULTIMOS PERFILES VISTOS -->*/}
            <div className="row">
                <div className="col s12 m6">
                    <p><b>Trabajadores vistos recientemene</b></p>
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <img src="../assets/images/perfil/0.jpeg" alt="" className="circle"/>
                            <span className="title"><b>Guiileermo Toro</b></span>
                            <p>Mecánico</p>
                            <a href="#" className="secondary-content">
                              <span>Hoy</span>
                            </a>
                        </li>
                        <li className="collection-item avatar">
                            <img src="../assets/images/perfil/1.jpeg" alt="" className="circle"/>
                            <span className="title"><b>Hector Herrera</b></span>
                            <p>Abogado</p>
                            <a href="#" className="secondary-content">
                              <span>Hace una semana</span>
                            </a>
                        </li>
                    </ul>
                </div> {/* <!-- Fin de la columna principal del panel de trabajadores recientes vistos -->*/}
                
                {/*<!-- TRABAJADORES RECOMENDADOS -->*/}
                <div className="col s12s m6">
                    <p><b>Trabajadores recomendados</b></p>
                    <div className="card">
                        <div className="card-content">
                            Recomendado 2
                        </div>
                    </div>
                </div> {/*<!-- Fin de la columna principal del panel de trabajadores recomendados -->*/}
                
            </div> {/*<!--Fin de la fila del panel de trabajadores recientes vistos -->*/}
          </div>
        </div>
      );
    }
  }
  
  export default Client;
  