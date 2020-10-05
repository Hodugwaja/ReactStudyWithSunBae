import React from 'react';
import './TodoListCSS.css';

const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list">
      <div className="title">
        Todo List
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;