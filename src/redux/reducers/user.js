

const user = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      // console.log('action',action)
      return action.payload;
    default:
      return state;
  }
}

export default user;