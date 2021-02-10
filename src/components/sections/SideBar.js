import React from 'react';

/**
 * Class Sidebar
 * LATERAL BAR of the application
 * receives as parameter the text to be displayed in the upper bar
 * It contains a link to the Home page ('/')
 * @author Carlos Elguedo
 * @version 0.0.1
 */
const SideBar = ({ options, route }) => {
  const mapOptions = () => {
    return options.map((option, i) => {
      return (
        <li key={i}>
          <a href={option.url}> {option.label} </a>
        </li>
      );
    });
  };

  return (
    <div id="wrapper" className="">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href={route}>SIF Cartagena</a>
          </li>
          {mapOptions()}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
