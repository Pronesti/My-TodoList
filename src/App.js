import React, { Component } from "react";
import Todo from "./Components/Todo";
// You need to npm install react-redux and import the Provider component
import { Provider } from "react-redux";
// You need to npm install redux and import the createStore method
import { createStore } from "redux";

// We define our reducer here so that we can pass it in when we create the store
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      let newState = [...state, action.value];
      return newState;
    case "REMOVE_TODO":
      return [
        ...state.slice(0, action.value),
        ...state.slice(action.value + 1 , state.length)
      ];
    default:
      return state;
  }
};

// We instantiate the store by calling the createStore method we imported and
// passing in the reducer we defined
const store = createStore(todoReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* Wrap all your components with the Provider component as done here, 
    remember to pass in the store */}
        <Todo />
      </Provider>
    );
  }
}

export default App;
