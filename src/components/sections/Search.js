import React from 'react';
import CarouselSearch from './CarouselSearch';
import OptionSearchCategorie from './OptionSearch';
import ResultPanel from './ResultPanel';
/**
 *
 * @author Carlos Elguedo
 * @version 0.0.1
 */

const Search = ({ options, status }) => {
  const onOptionChanged = selected => {
    console.log('------------Selected: ', selected);
  };

  const onSearch = event => {
    
    const { name, value } = event.target;

    console.log('Va a buscar: ', value);
  };

  return (
    <div>
      <CarouselSearch />
      <div className="row">
        <div className="col-lg-12 search-bar">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar trabajador"
              onChange={onSearch}
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button">
                Buscar
              </button>
            </span>
          </div>
        </div>
      </div>

      <OptionSearchCategorie
        options={options}
        status={status}
        onSelect={onOptionChanged}
      />
      <ResultPanel
        result_title="Aquí apareceran tus resultados..."
        workers={{}}
      />
    </div>
  );
};

export default Search;
