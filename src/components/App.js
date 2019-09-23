import React, { Component } from 'react'
import Menu from './Menu'
import Header from './Header'
import Login from './Login'
// import LeaderBoard from './LeaderBoard'
import * as API from '../utils/_DATA.js'

class App extends Component {

  componentDidMount() {
    this.getQuestions()
    this.getUsers()
  }

  getQuestions() {
    API._getQuestions()
      .then(questions => {
        console.log('These are the questions:', questions)
      })
  }

  getUsers() {
    API._getUsers()
      .then(users => {
        console.log('These are the users:', users)
      })
  }

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
