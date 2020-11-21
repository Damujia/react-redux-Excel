import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux/actions/index'
class Filters extends React.Component {
  render () {
    const { todos, todos1 } = this.props
    return (
      <div style={{display:'flex'}}>
        <ul>
          {
            todos.map(e =>
              <li key={e.id} style={{ textDecoration: e.completed ? 'line-through' : 'none' }} onClick={() => this.props.toggleTodo(e.id)} >
                {e.text}
              </li>
            )
          }
        </ul>
        <ul>
          {
            todos1.map(e =>
              <li key={e.id} style={{ textDecoration: e.completed ? 'line-through' : 'none' }} onClick={() => this.props.toggleTodo(e.id)} >
                {e.text}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
};
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return new Error('无' + filter)
  }

}
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, 'SHOW_ACTIVE'),
    todos1: getVisibleTodos(state.todos, 'SHOW_COMPLETED')
  }
}
const mapDispatchToprops = dispatch => ({
  toggleTodo: data => {
    dispatch(toggleTodo(data))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToprops
)(withRouter(Filters));