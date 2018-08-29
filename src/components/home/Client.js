import React, { Component } from 'react';


class Client extends Component {
    render() {
      return (
        <div className="App">
            
            <nav className="navbar navbar-light bg-primary">
                <div className="navbar-brand text-white" href="">
                    <img src="assets/images/SIF.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Nombre de usuario
                </div>
            </nav>

            <div className="container">
                
                <div className="row">
                
                    <div className="col-lg-8 search-bar p-t-20">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Escribe aquí el servicio que estas buscando"/>
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="button">Buscar</button>
                            </span>
                        </div>
                    </div>

                </div>

                {/*<ResultPanel result_title ={this.state.result_title} videos_to_view={this.state.searched} video_player={this.viewVideo}/>*/}
            </div>
        </div>
      );
    }
  }
  
  export default Client;
  