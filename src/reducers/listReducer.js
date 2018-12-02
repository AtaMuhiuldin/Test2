const state = {
  lsCount: 0,
  taskList: []
};

function listReducer(mState = { ...state }, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
export default listReducer;
