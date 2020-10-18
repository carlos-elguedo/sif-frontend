import React, { useState } from 'react';
import CarouselSearch from './CarouselSearch';
import OptionSearchCategorie from './OptionSearch';
import ResultPanel from './ResultPanel';
import { worker } from '../../api';
/**
 *
 * @author Carlos Elguedo
 * @version 0.0.1
 */

const Search = ({ options, status }) => {
  const [workersResult, setWorkersResult] = useState([]);

  const onOptionChanged = async selected => {
    if (typeof selected === 'string')
      await makeRequestSearch({ q: selected, searchBy: 'categorie' });
  };

  const onSearch = async event => {
    const { value } = event.target;
    await makeRequestSearch({ q: value });
  };

  const makeRequestSearch = async ({ q = '', searchBy = 'profession' }) => {
    let { data } = await worker.searchWorkers({
      q,
      searchBy
    });
    setWorkersResult(data.searchWorkers.workers);
    console.log('Search -> result', workersResult);
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
