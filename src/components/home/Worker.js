import React, { Component } from 'react';
import NavBar from '../sections/NavBar'
import SideBar from '../sections/SideBar'
import ProfileWork from '../user/ProfileWork'



class Client extends Component {
    render() {
      return (
        <div className="App">
        <NavBar nav_title = " User Name worker"/>
        <SideBar/>
        <div className="container">
          <ProfileWork user_name= "User Name" user_work = "Electricista" user_work_category = "Técnicos"/>
          {/* <SearchBar search={this.getVideos} typing={this.typing}/>
          <ResultPanel result_title ={this.state.result_title} videos_to_view={this.state.searched} video_player={this.viewVideo}/> */}
        </div>
      </div>
      );
    }
  }

  export default Client;
