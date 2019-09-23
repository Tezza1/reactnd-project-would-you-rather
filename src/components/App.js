import React, { Component } from 'react'
import Menu from './Menu'
import Header from './Header'
import Login from './Login'
// import LeaderBoard from './LeaderBoard'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Header />
        <Login />
      </div>
    )
  }
}

export default App
