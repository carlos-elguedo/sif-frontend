import React, {Component} from 'react';

/**
 *
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class Search extends Component{

    render(){
        return(

            <div className="row">
            
                <div className="col-lg-12 search-bar">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Buscar trabajador"/>
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">Buscar</button>
                        </span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Search;
