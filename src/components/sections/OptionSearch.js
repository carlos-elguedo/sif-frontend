/**
 * Options of search, this is another way to search workers
 * @author Carlos Elguedo
 * @version 0.0.1
 */

import React from 'react';
import styled from 'styled-components';
import SearchableSelect from 'emerald-ui/lib/SearchableSelect';

const StyleSelect = styled(SearchableSelect)`
  width: 100%;
  background-color: white;
  a {
    text-align-last: center;
  }
  div > div.eui-text-field-wrapper {
    text-align-last: center;
  }
`;

const OptionSearch = ({ options, status, onSearch, currentValue }) => { 
  const mapOptions = () => {
    return Object.values(options).map((category, i) => {
      return (
        <option key={i} value={category.cod}>
          {category.name_es}
        </option>
      );
    });
  };
  return (
    <div className="form-group">
      <div className="value selects">
        <div>
          {status ? (
            <StyleSelect
              id={'searchCategorie'}
              onSelect={ele => {
                if (typeof ele === 'string') {
                  onSearch(ele);
                }
              }}
              value={currentValue}
            >
              <option value={''}> O selecciona una categoria</option>
              {mapOptions()}
            </StyleSelect>
          ) : (
            <div>No ready</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OptionSearch;
