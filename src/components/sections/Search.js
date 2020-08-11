import React from 'react';
import CarouselSearch from './CarouselSearch';
import OptionSearchCategorie from './OptionSearch';
import ResultPanel from './ResultPanel';
/**
 *
 * @author Carlos Elguedo
 * @version 0.0.1
 */

const Search = () => {
  return (
    <div>
      <CarouselSearch/>
      <div className="row">
        <div className="col-lg-12 search-bar">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar trabajador"
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button">
                Buscar
              </button>
            </span>
          </div>
        </div>
      </div>

      
      <OptionSearchCategorie/>
      <ResultPanel result_title = 'Aquí apareceran tus resultados...' workers={{}} />
    </div>
  );
};

export default Search;
