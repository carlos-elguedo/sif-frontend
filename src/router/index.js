import React from 'react'
import { Router } from 'react-router'
import { Scene } from 'redux'
import Home from '../components/access/Access'
import About from '../components/home/Home'
const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" initial = {true} />
            <Scene key = "about" component = {About} title = "About" />
        </Scene>
    </Router>
)
export default Routes