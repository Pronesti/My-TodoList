import React, { Component } from "react";
import { connect } from "react-redux"; // We import the connect method from react-redux
import '.././index.css';

// It's useful, but not necessary, to define your action types as variables and reference
// them when you define your actions
// You would do this in a seperate file and import, you can then reference them here and
// also in your reducer
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

// These are the action creators, they return the action object and pass in the todo as a
// parameter
const add_todo = todo => {
  return {
    type: ADD_TODO,
    value: todo
  };
};

const remove_todo = indexOfTodo => {
  return {
    type: REMOVE_TODO,
    value: indexOfTodo
  };
};

// We define our mapStateToProps function which we will pass in to the connect method
// further down
// We assign the entire state here to the todos property as we only contain the list of
//todos in the state
const mapStateToProps = state => {
  return {
    todos: state
  };
};

// We aren't using mapDispatchToProps as we don't need it in this simple example
// const mapDispatchToProps = state => {
//   return {};
// };

// I have defined my component here, it's a simple component which takes a user input of
// todo items, add it's to the state and renders all the todos on the page
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Todo App - Redux Practice</h1>

 <div className="webflow-style-input">
    <input className="" type="text" name="todo" placeholder="What's your on your mind?" onChange={e => {
            return this.handleChange(e);
          }}></input>
    <button type="submit" onClick={() => {
            // We define and call the dispatch method here as this is where our event
            // is triggered. We pass in the action, which in turn is passed in the
            // user input (this is how our data is passed into the store)
            return this.props.dispatch(add_todo(this.state.userInput));
          }}><i className="icon ion-android-arrow-forward">></i></button>
  </div>


        <ul className="list">
          {this.props.todos &&
            this.props.todos.map( (todo, a) => {
              console.log(a);
              return (
                <li 
                  name={a}
                  className="item"
                  onClick={() => this.props.dispatch(remove_todo(a))
                  }
                >
                  {todo}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

// We use the connect method here to connect the component to the state,
// We pass in null as the second argument as we aren't using mapDispatchToProps
export default connect(
  mapStateToProps,
  null
)(ToDo);
