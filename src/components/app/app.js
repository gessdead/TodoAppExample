import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';
import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        })
    };

    createNewItem = () => {
        this.setState(({ todoData }) => {
            const testTodo = {
                label: 'ToDo',
                important: false,
                id: todoData.length + 1
            };
            const newArray = [...todoData, testTodo];

            return {
                todoData: newArray
            }

        })
    };

    addItem = (props) => {
        console.log(props);
    };

    render() {
        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3}/>
                <div className='top-panel d-flex'>
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }
                    onAdded={this.addItem}/>

                <AddItemForm
                    onAddItem={this.createNewItem} />
            </div>
        )
    }


}
