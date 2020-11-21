import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addTodo } from '../../redux/actions/index'

class DemoAddTodo extends React.Component {
  render () {
    let input
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.addTodo(input.value)
          input.value = ''
        }}>
          <input ref={node => input = node} />
          <button type="submit">添加</button>
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addTodo: data => {
    dispatch(addTodo(data))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DemoAddTodo));