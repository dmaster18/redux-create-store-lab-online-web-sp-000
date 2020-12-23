// write your createStore function here

function createStore(reducer) {
  let state;
  
  function getState() {
    return state;
  }
  
  function dispatch(action) {
      state = reducer(state, action);
      render();
  }
  
  
}

function candyReducer(action, state = []) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
}