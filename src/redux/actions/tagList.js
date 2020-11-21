const addTag = data => {
  return {
    type: 'ADD_TAG',
    data
  }
};
const removeTag = data => {
  return {
    type: 'REMOVE_TAG',
    data
  }
}
export { addTag, removeTag };