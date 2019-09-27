import React, { Component } from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import _ from 'lodash'
import './HomePage.css'
import Question from './Question'
import QuestionDone from './Question_done'

class HomePage extends Component {

  render() {
    const { questions } = this.props
    let arr = _.values(questions)

    arr.map(i => console.log(i))

    if(arr[0] === undefined) {
      return(
        <div className="ui container center aligned card-container">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      )
    }

    return(
      <div>
        <div className="ui container center aligned card-container">
          <h2>
            Unanswered questions
          </h2>
          <div className="ui cards">
          {arr.map(item => (
            <Question item={item} />
          ))}
          </div>
        </div>
        <br />
        <div className="ui container center aligned card-container">
          <h2>
            Answered questions
          </h2>
          <div className="ui cards">
          {arr.map(item => (
            <QuestionDone item ={item} />
          ))}
          </div>
        </div>
    </div>
    )
  }
}

export default connect((state) =>({
  questions: state.questions
}))(HomePage)

