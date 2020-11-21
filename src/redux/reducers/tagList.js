/* eslint-disable */
const tagList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAG':
      let arr = [...state, action.data];
      let hash = {};
      let newArr = arr.reduce((item, next) => {
        hash[next.path] ? '' : (hash[next.path] = true && item.push(next));
        return item;
      }, []);
      return newArr;
      break;
    case 'REMOVE_TAG':
      let remArr = state.filter(e => {
        if (e.path !== action.data) {
          return e
        }
      })
      return remArr
    default:
      return state;
  }
}
export default tagList;