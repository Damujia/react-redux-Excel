import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions/index'
class Footbutton extends React.Component {
  render () {
    return (
      <div>
        <button disabled={this.props.visibility === 'SHOW_ALL'} onClick={() => this.props.setVisibilityFilter('SHOW_ALL')} style={{ marginLeft: '4px' }}>所有</button>
        <button disabled={this.props.visibility === 'SHOW_ACTIVE'} onClick={() => this.props.setVisibilityFilter('SHOW_ACTIVE')} style={{ marginLeft: '4px' }}>已有</button>
        <button disabled={this.props.visibility === 'SHOW_COMPLETED'} onClick={() => this.props.setVisibilityFilter('SHOW_COMPLETED')} style={{ marginLeft: '4px' }}>已取消</button>
      </div>
    )
  }
};

const mapStateToProps = state => state
const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    setVisibilityFilter: data => {
      dispatch(setVisibilityFilter(data))
    }
  })
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Footbutton));