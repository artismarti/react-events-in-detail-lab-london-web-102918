import React, {Component} from 'react'

export default class DelayedButton extends Component {
  handleClick = (event) => {
    event.persist()
    setTimeout(() =>{
      this.props.onDelayedClick(event)
    },this.props.delay)
  }
  render () {
    return (
      <button type="button" name="button" onClick={this.handleClick}>Delay</button>
    )
  }
}
