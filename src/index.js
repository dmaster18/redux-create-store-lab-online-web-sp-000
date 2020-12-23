// write your createStore function here

function createStore(reducer) {
  let state;
  
  function getState() {
    return state;
  }
  
  function dispatch(action) {
      state = reducer(state, action);
      
  }
  
}

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch