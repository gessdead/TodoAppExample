import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {

    const items = ['Drink Coffee', 'Build Awesome App'];

    return (
        <ul>
            <li><TodoListItem label='Drink Coffee'/></li>
            <li><TodoListItem
                label='Build react app'
                important/>
            </li>
        </ul>
    )
};

export default TodoList;
