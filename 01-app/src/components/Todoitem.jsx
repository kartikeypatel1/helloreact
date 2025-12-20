import React from 'react';
function TodoItem() {
  return (
    <li className="todo-item">
        <span> <input type="checkbox" />
      <span className='todo-item-margin'>Eat</span></span>
     
      <p>...</p>
    </li>
  );
}

export default TodoItem;
