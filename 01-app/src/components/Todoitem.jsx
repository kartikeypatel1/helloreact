import React from 'react';
function TodoItem(props) {
  return (
    <li className="todo-item">
        <span> {props.completed?<></>:<input type="checkbox" />}
      <span className='todo-item-margin'>{props.text}</span></span>
     
      <p>...</p>
    </li>
  );
}

export default TodoItem;
