import React from 'react';
import styled from 'styled-components';
import SearchableSelect from 'emerald-ui/lib/SearchableSelect';

const StyleSelect = styled(SearchableSelect)`
  width: 100%;

  a {
    text-align-last: center;
  }
  div > div.eui-text-field-wrapper {
    text-align-last: center;
  }
`;

const SelectFormEditProfile = ({
  id,
  currentValue,
  text,
  options,
  status,
  code = '',
  handleSelect
}) => {
  currentValue = currentValue.toString() || '';
  code = code.toString() || '';
  const hasCode = code ? true : false;

  let optionsSelect = Object.values(options).map((item, index) => {
    if (hasCode) {
      const isSameCodeProfession = currentValue => currentValue === code;
      let itemMatch = item.group.some(isSameCodeProfession);
      if (itemMatch) {
        if (currentValue) {
          let itemSelected = item.cod === currentValue;
          return (
            <option value={item.cod} key={index} selected={itemSelected}>
              {item.name_es}
            </option>
          );
        } else {
          return (
            <option value={item.cod} key={index}>
              {item.name_es}
            </option>
          );
        }
      }
    } else {
      if (currentValue) {
        let itemMatchCategorie = item.cod === currentValue;
        return (
          <option value={item.cod} key={index} selected={itemMatchCategorie}>
            {item.name_es}
          </option>
        );
      } else {
        return (
          <option value={item.cod} key={index}>
            {item.name_es}
          </option>
        );
      }
    }
    return [];
  });

  return (
    <div className="form-row">
      <div className="name">{text}</div>
      <div className="value selects">
        <div>
          {status ? (
            <StyleSelect
              id={id}
              shape="flat"
              onSelect={handleSelect}
              value={currentValue}
            >
              {/* <option value='default' key='000'>Selecciona una opción</option> */}
              {optionsSelect}
            </StyleSelect>
          ) : (
            <div>No ready</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectFormEditProfile;
