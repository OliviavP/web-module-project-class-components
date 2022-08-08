import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.handleAdd(this.state.input)
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false
      }),
    })
  }
  handleChange = (evt) => {
    this.setState({
      ...this.state,
      input: evt.target.value,
    })
  }
  render() {
    return (
      <form>
        <input onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
        <button onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}
