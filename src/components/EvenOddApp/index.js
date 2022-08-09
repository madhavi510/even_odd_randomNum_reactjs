// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  incrementBtn = () => {
    const randomNum = this.randomNumber()

    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const type = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="title">Count {count}</h1>
          <p className="desc">Count is {type}</p>
          <button className="btn" type="button" onClick={this.incrementBtn}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
