import React, { Component } from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {

    state = { value: ''};

    handleChange = (event) => {
        this.setState({value: event.target.value});

        console.log(this.state);
    };



    render() {

        const { onAddItem } = this.state;

        return (
            <div className='d-flex add-item-form'>
                <input
                    placeholder='Add something'
                    type="text"
                    className='form-control'
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <button
                    type='button'
                    className='btn btn-outline-secondary'
                    onClick={ onAddItem }>Add Item
                </button>
            </div>
        )
    }
}
