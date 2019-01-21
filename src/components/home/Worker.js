import React, { Component } from 'react';
import Header from '../sections/Header'



class Client extends Component {
    render() {
      return (
        <div className="App">
        <Header nav_title = " User Name worker"/>
        <div className="container">
          {/* <SearchBar search={this.getVideos} typing={this.typing}/>
          <ResultPanel result_title ={this.state.result_title} videos_to_view={this.state.searched} video_player={this.viewVideo}/> */}
        </div>
      </div>
      );
    }
  }
  
  export default Client;
  