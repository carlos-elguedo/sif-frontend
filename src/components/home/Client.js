import React, { Component } from 'react';

import NavBar from '../sections/NavBar'
import Search from '../sections/Search'
import SideBar from '../sections/SideBar'
import Header from '../sections/Header'



class Client extends Component {
    render() {
      return (
        <div className="App">
          <NavBar nav_title = " User Name worker"/>
          <SideBar/>
          <div className="container">
            <Header text = 'Empieza a buscar trabajadores en tu ciudad...'/>
            <Search/>
          {/* <SearchBar search={this.getVideos} typing={this.typing}/>

          <ResultPanel result_title ={this.state.result_title} videos_to_view={this.state.searched} video_player={this.viewVideo}/> */}
        </div>
      </div>
      );
    }
  }

  export default Client;
