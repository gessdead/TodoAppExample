import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {

    const items = ['Drink Coffee', 'Build Awesome App'];

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    )
};

const AppHeader = () => <h1>My Todo List</h1>;

const SearchPanel = () => {

    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return (
        <input
            type="text"
            placeholder={searchText}
            className="test"
            htmlFor="rrr"
            style={searchStyle}
        />
    )
};

const App = () => {

    const value = '<script> alert("hui") </script>';

    return (
        <div>
            {value}
            <AppHeader/>
            <SearchPanel/>
            <TodoList />
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
