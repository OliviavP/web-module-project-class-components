import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.handleToggle(this.props.todo.id)
  }
  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.todo.task}{' '}
        {this.props.todo.completes ? <span>completed</span> : <span></span>}
      </li>
    )
  }
}
