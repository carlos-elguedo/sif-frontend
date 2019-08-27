import React, { Component } from 'react';

import NavBar from '../sections/NavBar'
import Search from '../sections/Search'
import SideBar from '../sections/SideBar'
import Header from '../sections/Header'
import OptionSearch from '../sections/OptionSearch'
import ResultPanel from '../sections/ResultPanel'

const axios = require('axios');
const config = require('../../config')

class Client extends Component {

  constructor(props){
    super(props)
    this.state={
        workers: []
    };

    this.search = this.search.bind(this)
  }

  componentDidMount() {
    // const transport = axios.create({
    //   withCredentials: true
    // })

    axios.get(`${config.SERVER_URL}${config.SERVER_API_UTILS_URL}userIsLogged`, { withCredentials: true })
    .then(function (response) {
      console.log('Vino response: ', response);
    })
    .catch(function (error) {
      console.log('Viono error: ', error);
    });
  }

  search(){

  }

    render() {
      return (
        <div className="App">
          <NavBar nav_title = " User Name worker"/>
          <SideBar/>
          <div className="container">
            <Header text = 'Empieza a buscar trabajadores en tu ciudad...'/>
            <Search search = {this.search}/>
            <OptionSearch/>
            <ResultPanel result_title = 'En SIF esta encuentras lo que estas buscando...' workers={this.state.workers} />
            {/* <SearchBar search={this.getVideos} typing={this.typing}/>

            <ResultPanel result_title ={this.state.result_title} videos_to_view={this.state.searched} video_player={this.viewVideo}/> */}
        </div>
      </div>
      );
    }
  }

  export default Client;
