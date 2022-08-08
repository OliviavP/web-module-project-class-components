import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false,
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        },
      ],
    }
  }

  handleAdd = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    })
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === chooseId) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      }),
    })
  }
  render() {
    const { todos } = this.state
    return (
      <div>
        <h1>To Do List</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd} />
      </div>
    )
  }
}
