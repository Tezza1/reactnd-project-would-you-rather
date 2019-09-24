import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/users'
import { handleGetQuestions } from '../actions/questions'
import Menu from './Menu'
import Header from './Header'
// import Login from './Login'
import HomePage from './HomePage'
// import LeaderBoard from './LeaderBoard'


class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetUsers())
    dispatch(handleGetQuestions())
  }

  render() {
    return (
      <div>
        <Menu />
        <Header />
        <HomePage />
      </div>
    )
  }
}

export default connect(state => ({

}))(App)
