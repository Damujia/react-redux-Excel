import React from 'react'
import { connect } from 'react-redux'
import { addTag, removeTag } from '@/redux/actions/tagList'
import { withRouter } from 'react-router-dom'
import { menus } from '@/router/menus'
import { Scrollbars } from 'react-custom-scrollbars'; // 流畅的滚动条

class Tags extends React.Component {
  rouclick (val) {
    this.props.history.push(val)
  };
  removetag (event, val) {
    let {tagList, location} = this.props
    event.stopPropagation()
    this.props.removeTag(val)
    if(location.pathname === val){
      if(val !== tagList[tagList.length - 1].path){
        this.props.history.push(tagList[tagList.length - 1].path)
      }else if(val === tagList[tagList.length - 1].path){
        this.props.history.push(tagList[tagList.length - 2].path)
      }
    }
  };
  componentDidMount () {
    let { location } = this.props
    this.props.addTag({
      title: '首页',
      path: '/main'
    })
    menus.forEach(e => {
      if (e.children) {
        e.children.forEach(f=>{
          if(f.path === location.pathname){
            this.props.addTag(f)
          }
        })
      } else {
        if (e.path === location.pathname) {
          this.props.addTag(e)
        }
      }
    })
  };
  render () {
    let { tagList, location } = this.props
    let datas = []
    for (let i = 1; i < 30; i++) {
      datas.push('标签' + i)
    }
    return (
      <div className="tags_sty">
        <div className="tags_sty_demo">
          <Scrollbars style={{ width: '100%', height: 45 }} autoHide universal={true}>
            <ul className="tags_ul">
              {
                tagList.map(e => (
                  <li key={e.path} onClick={() => this.rouclick(e.path)} className={e.path === location.pathname ? 'selcolor' : ''}>
                    <span>{e.title}</span>
                    <em onClick={event => this.removetag(event, e.path)}>
                      &times;
                    </em>
                  </li>
                ))
              }
            </ul>
          </Scrollbars>
        </div>
      </div>
    )
  }
};
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  addTag: data => {
    dispatch(addTag(data))
  },
  removeTag: data => {
    dispatch(removeTag(data))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Tags));