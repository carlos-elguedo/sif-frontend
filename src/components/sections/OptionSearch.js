import React, {Component} from 'react';
// import { Link } from "react-router-dom";


/**
 * Class Sidebar
 * LATERAL BAR of the application
 * receives as parameter the text to be displayed in the upper bar
 * It contains a link to the Home page ('/')
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class OptionSearch extends Component{

  getProfessions(){
    fetch(``)
      .then(res =>res.json())
      .then(data =>{
        // this.setState({
        //   videoDetails: data.items
        // });
        console.log("Se obtuvieron detalles video: " + data.total + " Profesiones");
        // this.setState(this.state);
        // this.render();
        // this.getRecommendedVideos();
      });
  }

    render(){
      const Professions =  this.props.professions.map((profession, i) => {
            return(
              <option>profession.name</option>
            )
          });
        return(
          <div class="form-group">
            <label for="exampleSelect1">Example select</label>
            <select class="form-control" id="exampleSelect1">
              {Professions}
            </select>
          </div>
        );
    }

}

export default OptionSearch;
