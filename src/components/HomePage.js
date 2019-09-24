import React, { Component } from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import _ from 'lodash'
import './HomePage.css'

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
      <div className="ui container center aligned card-container">
        <h2>
          Unanswered questions
        </h2>
        <div className="ui cards">
        {arr.map(item => (
          <div className="card" key={item.id}>
            <div className="content">
              {/*<img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" />*/}
              <div className="header">
                {item.author}
              </div>
              <div className="meta">
                <Moment format="DD MMMM YYYY">
                  {item.timestamp}
                </Moment>
              </div>
              <div className="description">
                Choose one of the following options
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui secondary button">{item.optionOne.text}</div>
                <div className="ui basic black button">{item.optionTwo.text}</div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
  }
}

export default connect((state) =>({
  questions: state.questions
}))(HomePage)

