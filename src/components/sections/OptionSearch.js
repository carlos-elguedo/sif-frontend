import React, {Component} from 'react';
// import { Link } from "react-router-dom";
const config = require('../../config.js')

/**
 * Class Sidebar
 * LATERAL BAR of the application
 * receives as parameter the text to be displayed in the upper bar
 * It contains a link to the Home page ('/')
 * @author Carlos Elguedo
 * @version 0.0.1
 */

class OptionSearch extends Component{




  constructor(props){
    super(props)

    this.state={
        categories: []
    };

    this.getCategories = this.getCategories.bind(this)

    this.getCategories()
  }




  getCategories(){

    fetch(`${config.SERVER_URL}${config.SERVER_API_PROF_URL}allcategory/`)
      .then(res =>res.json())
      .then(data =>{
        // console.log("Se obtuvieron: " + data.length + " categorias");
        this.setState({categories: data})
        console.log('tuldlasd ' + this.state.categories.length)
      })
      // .catch(error =>{
      //   console.log('Error request the Categories: ' error);
      // })
  }//End get Categories

    render(){
      const Categories =  this.state.categories.map((category, i) => {
            return(
              <option key={i}>{category.name_es}</option>
            )
          });
      // getCategories()
        return(
          <div className="form-group">
            <select className="form-control" id="exampleSelect1">
              <option> O selecciona una categoria</option>
              {Categories}
            </select>
          </div>
        );
    }

}

export default OptionSearch;
