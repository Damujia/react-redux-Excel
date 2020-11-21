import React from 'react'
import { withRouter } from 'react-router-dom'
import DemoAddTodo from './Demo1-1'
import Filters from './Demo1-2'
import Footbutton from './Demo1-3'
class Demo1 extends React.Component {
  render () {
    return (
      <div>
        <DemoAddTodo />
        <Filters />
        <Footbutton />
      </div>
    )
  }
}
export default withRouter(Demo1);