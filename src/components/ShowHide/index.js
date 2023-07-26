// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onClickFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-names-container">
          <div className="each-name-card">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName ? (
              <div className="name">
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div className="each-name-card">
            <button
              type="button"
              className="button"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName ? (
              <div className="name">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
