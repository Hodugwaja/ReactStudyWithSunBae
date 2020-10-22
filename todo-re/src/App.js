import React, { useEffect } from "react";
import "./style.css";
import InputField from "./components/inputField";
import TodosList from "./components/TodoList";
import { persistTodos } from "./redux/action/addTodo-action";
import { connect } from "react-redux";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1> Todo List</h1> 
      <InputField />
      <TodosList />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);
