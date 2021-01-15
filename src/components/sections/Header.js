import React, {Component} from 'react';

/**
 * Class Sidebar
 * LATERAL BAR of the application
 * receives as parameter the text to be displayed in the upper bar
 * It contains a link to the Home page ('/')
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class Header extends Component{

    render(){
        return(
          <div className="row">
            <h2 className='p-t-10 text-center w-full'>{this.props.text}</h2>
          </div>
        );
    }

}

export default Header;
